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
    res
      .status(200)
      .json({ success: true, message: "Review submitted", data: SavedReview });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
