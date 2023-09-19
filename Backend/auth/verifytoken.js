import jwt from "jsonwebtoken";
import Usermodel from "../models/Usermodel.js";
import Doctormodel from "../models/Doctormodel.js";

export const authenticate = async (req, res, next) => {
  const authToken = req.headers.authorization;
  if (!authToken || !authToken.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ success: false, message: "No token, authorization denied" });
  }
  try {
    // Your code for JWT validation and user authorization goes here
    console.log(authToken);
    const token = authToken.split(" ")[1];
    //verify token
    const decoded = jwt.verify(token, process.env.JWT_TOKEN_KEY);
    req.userid = decoded.id;
    req.role = decoded.role;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    }
    return res.status(401).json({ success: false, message: "invalid token" });
  }
};

export const restrict = (roles) => async (req, res, next) => {
  const userId = req.userid;
  let user;
  const patient = await Usermodel.findById(userId);
  const doctor = await Doctormodel.findById(userId);

  if (patient) {
    user = patient;
  }
  if (doctor) {
    user = doctor;
  }

  if (!roles.includes(user.role)) {
    return res
      .status(401)
      .json({ success: false, message: "You arent authorized" });
  }
  next();
};
