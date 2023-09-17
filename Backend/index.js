import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { authrouter } from "./routes/auth.js";
import { userrouter } from "./routes/usersroute.js";
import { doctorrouter } from "./routes/doctorsroute.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

///setting cors option
const corsoption = {
  origin: true,
};

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsoption));
//connectig to the database
mongoose.set("strictQuery", false);

const connecttodb = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("\x1b[35m%s\x1b[0m", "connected to the database");
      })
      .catch((error) => {
        console.log(
          "\x1b[32m%s\x1b[0m",
          "error while connecting to the database",
          error
        );
      });
  } catch (error) {
    console.log(error);
  }
};
app.use("/auth", authrouter);
app.use("/user", userrouter);
app.use("/doctor", doctorrouter);

app.listen(port, () => {
  connecttodb();
  console.log("listening on port " + port);
});
