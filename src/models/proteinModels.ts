import { Schema, model } from "mongoose";

const proteinSchema = new Schema({
  name: { type: String, required: true },
});

export default model("ProteinModel", proteinSchema);
