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

//function to do the rating
const updateRatings = async (doctorId) => {
  try {
    const reviews = await Reviewsmodel.find({ doctor: doctorId });
    if (reviews.length === 0) {
      await Doctormodel.findByIdAndUpdate(doctorId, {
        averageRating: 0,
        totalRating: 0,
      });
      return;
    }
    //calculate the total rating
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    //calculate average rating
    const averageRating = totalRating / reviews.length;
    //update doctors ratings allof them once
    await Doctormodel.findByIdAndUpdate(doctorId, {
      averageRating,
      totalRating,
    });
  } catch (error) {
    console.error(error);
  }
};

export const addreviews = async (req, res) => {
  if (!req.body.doctor) req.body.doctor = req.params.doctorId;
  if (!req.body.user) req.body.user = req.userId;
  console.log(req.body.user);
  console.log(req.body);
  const newReview = new Reviewsmodel(req.body);
  console.log(newReview);

  try {
    const SavedReview = await newReview.save();

    //storing in the model of the user

    await Usermodel.findByIdAndUpdate(req.body.user, {
      $push: { reviews: SavedReview._id },
    });

    //storing in the model of the doctor
    await Doctormodel.findByIdAndUpdate(req.body.doctor, {
      $push: { reviews: SavedReview._id },
    });

    console.log("User ID:", req.body.user);
    console.log("Review ID:", SavedReview._id);

    await updateRatings(req.body.doctor);
    res
      .status(201)
      .json({ success: true, message: "Review created", data: SavedReview });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};
