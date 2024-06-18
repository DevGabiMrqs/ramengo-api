import { Schema, model } from "mongoose";

const brothSchema = new Schema({
  name: { type: String, required: true },
});

export default model("BrothModel", brothSchema);
