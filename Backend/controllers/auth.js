import Usermodel from "../models/Usermodel.js";
import Doctormodel from "../models/Doctormodel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//function for jwt token
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_TOKEN_KEY,
    { expiresIn: "15d" }
  );
};

export const register = async (req, res) => {
  console.log(req.body);
  const { email, password, name, photo, role, gender } = req.body;
  //lets check the emailsfrom the models based on the roles

  try {
    let user = null;
    if (role === "patient") {
      user = await Usermodel.findOne({ email });
    } else {
      if (role === "doctor") {
        user = await Doctormodel.findOne({ email });
      }
    }

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    //lets continue if he doesnt exist
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);
    console.log(hashpassword);
    if (role === "patient") {
      user = new Usermodel({
        email,
        password: hashpassword,
        name,
        photo,
        role,
        gender,
      });
    }
    if (role === "doctor") {
      user = new Doctormodel({
        email,
        password: hashpassword,
        name,
        photo,
        role,
        gender,
      });
    }
    await user.save();
    res.status(200).json({ user, message: "user registered successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    console.log(error);
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = null;
    const patient = await Usermodel.findOne({ email });
    const doctor = await Doctormodel.findOne({ email });
    if (patient) {
      user = patient;
    }
    if (doctor) {
      user = doctor;
    }
    if (!user) {
      res.status(400).json({ message: "user not found" });
    }

    //compare password
    const ispasswwormatch = await bcrypt.compare(password, user.password);
    if (!ispasswwormatch) {
      res.status(402).json({ status: false, message: "invalid credentials" });
    }

    const token = generateToken(user);
    const { role, ...rest } = user._doc;
    res.status(200).json({
      status: true,
      message: "Successfully login.",
      token,
      role,
      data: { ...rest },
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "failed to login",
      error: error.message,
    });
  }
};
