import express from "express";

import {
  deletedoctor,
  getalldoctors,
  getsingledoctor,
  updatedoctor,
} from "../controllers/doctorcontroller.js";

export const doctorrouter = express.Router();
userrouter.put("/:id", updatedoctor);
userrouter.get("/:id", getsingledoctor);
userrouter.get("/doctor", getalldoctors);
userrouter.delete("/:id", deletedoctor);
