import express from "express";
import {
  deleteuser,
  getallusers,
  getsingleuser,
  updateuser,
} from "../controllers/usercontroller.js";
import { authenticate, restrict } from "../auth/verifytoken.js";

export const userrouter = express.Router();
userrouter.get("/:id", authenticate, restrict(["patient"]), getsingleuser);
userrouter.get("/users", authenticate, restrict(["admin"]), getallusers);
userrouter.put("/:id", authenticate, restrict(["patient"]), updateuser);
userrouter.delete("/:id", authenticate, restrict(["patient"]), deleteuser);
