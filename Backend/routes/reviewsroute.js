import express from "express";
import { getallreviews, addreviews } from "../controllers/reviewscontroller.js";
import { authenticate, restrict } from "../auth/verifytoken.js";

export const reviewrouter = express.Router({ mergeParams: true });
//i have just added the / so i have to nest it beacuse to
//to do the folling it must for a single doctor..!
//doctors/doctorsId/reviews

reviewrouter.get("/", getallreviews);
reviewrouter.post("/", authenticate, restrict(["patient"]), addreviews);
