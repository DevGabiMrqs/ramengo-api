import { Schema, model, Document } from "mongoose";

interface IOrder extends Document {
  brothId: string;
  proteinId: string;
}

const orderSchema = new Schema<IOrder>({
  brothId: { type: String, required: true },
  proteinId: { type: String, required: true },
});

const OrderModels = model<IOrder>("Order", orderSchema);

export default OrderModels;
