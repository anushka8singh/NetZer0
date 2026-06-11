import express from "express";
import { protect } from "../middleware/authMiddleware";
import {
  registerUser,
  loginUser,
  getProfile,
} from "../controllers/authControllers";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get(
  "/profile",
  protect,
  getProfile
);

export default router;