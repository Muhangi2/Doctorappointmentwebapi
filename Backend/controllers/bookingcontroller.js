import Usermodel from "../models/Usermodel.js";
import Doctormodel from "../models/Doctormodel.js";
import Bookingmodel from "../models/Bookingmodel.js";

export const getbookings = async (req, res) => {
  try {
    const bookings = await Bookingmodel.find({});
    res.status(200).json({ message: "Successfull", data: bookings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    console.log(error);
  }
};

export const addbookings = async (req, res) => {
  if (!req.body.user) req.body.user = req.userId;
  if (!req.body.doctor) req.body.doctor = req.params.doctorId;
  const newbooking = new Bookingmodel(req.body);
  try {
    const Savedbooking = await newbooking.save();
    await Usermodel.findByIdAndUpdate(req.body.user, {
      $push: { appointments: Savedbooking._id },
    });
    await Doctormodel.findByIdAndUpdate(req.body.doctor, {
      $push: { appointments: Savedbooking._id },
    });
    res.status(200).json({
      success: true,
      message: "Booking submitted",
      data: Savedbooking,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};
