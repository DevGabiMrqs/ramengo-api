import { Request, Response } from "express";
import OrderModels from "../models/orderModels";

export const createOrder = async (req: Request, res: Response) => {
  const { brothId, proteinId } = req.body;

  try {
    if (!brothId || !proteinId) {
      return res
        .status(400)
        .json({ error: "both brothId and proteinId are required" });
    }
    const newOrder = await OrderModels.create({ brothId, proteinId });
    res.status(201).json({
      id: newOrder._id,
      description: "Salt and Chasu Ramen",
      image: "https://tech.redventures.com.br/icons/ramen/ramenChasu.png", // Exemplo fixo de imagem
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ error: "could not place order" });
  }
};
