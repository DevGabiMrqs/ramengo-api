import { Request, Response } from "express";
import orderModels from "../models/orderModels";
import axios from "axios";

const API_KEY = process.env.API_KEY;
const ORDER_ID_URL = 'https://api.tech.redventures.com.br/orders/generate-id';

export const createOrder = async (req: Request, res: Response) => {
  const { broth, protein } = req.body;

  try {
    const response = await axios.post(
      ORDER_ID_URL,
      {},
      {
        headers: { "x-api-key": API_KEY },
      }
    );

    const orderNumber = response.data.orderNumber;

    const order = new orderModels({ broth, protein, orderNumber });
    await order.save();

    res.status(201).json({ message: "Order created", orderNumber });
  } catch (error) {
    res.status(500).json({ message: "Failed to create order", error });
  }
};
