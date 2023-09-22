import express from "express";
import { addbookings, getbookings } from "../controllers/bookingcontroller.js";
import { authenticate, restrict } from "../auth/verifytoken.js";

export const bookingrouter = express.Router({ mergeParams: true });

bookingrouter.get("/", getbookings);
bookingrouter.post("/", authenticate, restrict(["patient"]), addbookings);
