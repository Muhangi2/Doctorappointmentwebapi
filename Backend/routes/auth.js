import express from "express";
import { login, register } from "../controllers/auth.js";
export const authrouter = express.Router();
authrouter.post("/register", register);
authrouter.post("/login",login);
