import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
    },
    users: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: "users",
    select: "name photo",
  });
  next();
});

reviewSchema.statics.calcAverageRatings = async function (doctorId) {
  try {
    const stats = await this.aggregate([
      { $match: { doctor: doctorId } },
      {
        $group: {
          _id: "$doctor",
          numOfRating: { $sum: 1 },
          avgRating: { $avg: "$rating" },
        },
      },
    ]);

    // Update doctor's average rating here

    console.log(stats);
  } catch (error) {
    console.error(error);
  }
};

reviewSchema.post("Save", function () {
  this.constructor.calcAverageRatings(this.doctor);
});

export default mongoose.model("Review", reviewSchema);
