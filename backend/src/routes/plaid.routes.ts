import express from "express";
import { testPlaid } from "../controllers/plaid.controller";
import {
  createPlaidLinkToken,
} from "../controllers/plaid.controller";

const router = express.Router();

router.get("/test", testPlaid);
router.post(
  "/create-link-token",
  createPlaidLinkToken
);

export default router;