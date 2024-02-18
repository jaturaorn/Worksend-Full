import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { PORT, mongoDBURL } from "./config.js";
import userRoute from "./routes/UserRoute.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome To Work send");
});

app.use("/users", userRoute);

app;

// try {
//   await mongoose.connect(mongoDBURL);
//   console.log("App Connected to MongoDB");
//   app.listen(PORT, () => {
//     console.log(`App is listening on ${PORT}`);
//   });
// } catch (error) {
//   console.error("Error connecting to database:", error);
// }
