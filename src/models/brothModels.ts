import { Schema, model, Document } from "mongoose";

interface IBroth extends Document {
  id: string;
  imageInactive: string;
  imageActive: string;
  name: string;
  description: string;
  price: number;
}

const brothSchema = new Schema<IBroth>({
  id: { type: String, required: true },
  imageInactive: { type: String, required: true },
  imageActive: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

const BrothModels = model<IBroth>("BrothModel", brothSchema);

export default BrothModels;
