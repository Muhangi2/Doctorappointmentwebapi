import express from "express";
import {
  deletedoctor,
  getalldoctors,
  getsingledoctor,
  updatedoctor,
} from "../controllers/doctorcontroller.js";
import { reviewrouter } from "./reviewsroute.js";
import { authenticate, restrict } from "../auth/verifytoken.js";

export const doctorrouter = express.Router();
//nested routes
doctorrouter.use("/:doctorId/reviews", reviewrouter);

doctorrouter.get("/alldoctors", getalldoctors);
doctorrouter.put(
  "/:id/update",
  authenticate,
  restrict(["doctor"]),
  updatedoctor
);
doctorrouter.get("/:id", getsingledoctor);
doctorrouter.delete("/:id", authenticate, restrict(["doctor"]), deletedoctor);
