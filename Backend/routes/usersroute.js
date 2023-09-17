import express from "express";
import {
  deleteuser,
  getallusers,
  getsingleuser,
  updateuser,
} from "../controllers/usercontroller.js";

export const userrouter = express.Router();
userrouter.put("/:id", updateuser);
userrouter.get("/:id", getsingleuser);
userrouter.get("/users", getallusers);
userrouter.delete("/:id", deleteuser);
