import Usermodel from "../models/Usermodel.js";
import Reviewsmodel from "../models/Reviewsmodel.js";
import Doctormodel from "../models/Doctormodel.js";

export const getallreviews = async (req, res) => {
  try {
    const reviews = await Reviewsmodel.find({});
    res.status(200).json({ message: "Successfull", data: reviews });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    console.log(error.message);
  }
};

export const addreviews = async (req, res) => {
  if (!req.body.doctor) req.body.doctor = req.params.doctorId;
  if (!req.body.user) req.body.user = req.userId;
  const newReview = new Reviewsmodel(req.body);
  try {
    const SavedReview = await newReview.save();
    await Doctormodel.findByIdAndUpdate(req.body.doctor, {
      $push: { reviews: SavedReview._id },
    });

    // Populate the "users" field within the aggregation pipeline
    const doctorId = req.body.doctor;
    const stats = await Reviewsmodel.aggregate([
      { $match: { doctor: doctorId } },
      {
        $lookup: {
          from: "users", // Assuming the users collection name is "users"
          localField: "user",
          foreignField: "_id",
          as: "userDetails",
        },
      },
      {
        $group: {
          _id: "$doctor",
          numOfRating: { $sum: 1 },
          avgRating: { $avg: "$rating" },
          reviews: { $push: "$$ROOT" }, // Include all review details
        },
      },
      {
        $project: {
          _id: 0,
          doctor: "$_id",
          numOfRating: 1,
          avgRating: 1,
          reviews: {
            $map: {
              input: "$reviews",
              as: "review",
              in: {
                reviewText: "$$review.reviewText",
                rating: "$$review.rating",
                user: { $arrayElemAt: ["$userDetails", 0] }, // Extract the user details
              },
            },
          },
        },
      },
    ]);

    // Update doctor's average rating and send the populated reviews
    await Doctormodel.findByIdAndUpdate(doctorId, {
      avgRating: stats[0] ? stats[0].avgRating : 0,
    });
    console.log(stats);
    res
      .status(200)
      .json({ success: true, message: "Review submitted", data: stats[0] });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
