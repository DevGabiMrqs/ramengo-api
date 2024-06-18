import { Request, Response } from "express";
import brothModels from "../models/brothModels";

export const getAllBroths = async (req: Request, res: Response) => {
  try {
    const broths = await brothModels.find().lean();
    res.status(200).json(broths);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch broths" });
  }
};
