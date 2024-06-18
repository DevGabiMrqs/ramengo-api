import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  broth: { type: Schema.Types.ObjectId, ref: "BrothModel", required: true },
  protein: { type: Schema.Types.ObjectId, ref: "ProteinModel", required: true },
  orderNumber: { type: String, required: true },
});

export default model("OrderModel", orderSchema);
