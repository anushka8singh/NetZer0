import { Request, Response } from "express";
import { plaidClient } from "../services/plaid.service";
import { createLinkToken } from "../services/plaid.service";

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

export const createPlaidLinkToken = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data = await createLinkToken(
      "test-user-id"
    );

    res.status(200).json({
      success: true,
      linkToken: data.link_token,
    });
  } catch (error) {
   console.error("PLAID ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create link token",
    });
  }
};