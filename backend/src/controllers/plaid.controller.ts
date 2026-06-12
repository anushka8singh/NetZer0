import { Request, Response } from "express";
import { plaidClient } from "../services/plaid.service";

export const testPlaid = async (
  req: Request,
  res: Response
) => {
  try {
    res.status(200).json({
      success: true,
      message: "Plaid Connected Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Plaid Connection Failed",
    });
  }
};