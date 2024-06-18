import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import broths from "./routes/broths";
import proteins from "./routes/proteins";
import orders from "./routes/orders";
import dotenv from "dotenv";

dotenv.config();

const app = express();

mongoose
  .connect("mongodb://localhost:27017/ramengo")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });

app.use(bodyParser.json());

app.use("/api/broths", broths);
app.use("/api/proteins", proteins);
app.use("/api/orders", orders);

export default app;
