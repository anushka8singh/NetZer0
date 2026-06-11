/*Verify JWT
Extract User ID
Attach User To Request*/

import { Response, NextFunction } from "express";
import { AuthRequest } from "../types/auth.types";
import jwt from "jsonwebtoken";
import User from "../models/user.model";

export const protect = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token =
        req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET as string
      ) as { id: string };

      const user = await User.findById(
        decoded.id
      );

      if (!user) {
        res.status(401).json({
          success: false,
          message: "User not found",
        });
        return;
      }

      req.user = user;

      next();
    } else {
      res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};