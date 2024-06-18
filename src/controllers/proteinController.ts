import { Request, Response } from "express";
import proteinModels from "../models/proteinModels";

export const getAllProteins = async (req: Request, res: Response) => {
  try {
    const proteins = await proteinModels.find();
    res.status(200).json(proteins);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch proteins" });
  }
};