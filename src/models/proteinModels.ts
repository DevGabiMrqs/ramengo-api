import { Schema, model, Document } from "mongoose";

interface IProtein extends Document {
  id: string;
  imageInactive: string;
  imageActive: string;
  name: string;
  description: string;
  price: number;
}

const proteinSchema = new Schema<IProtein>({
  id: { type: String, required: true },
  imageInactive: { type: String, required: true },
  imageActive: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

const ProteinModels = model<IProtein>("Protein", proteinSchema);

export default ProteinModels;
