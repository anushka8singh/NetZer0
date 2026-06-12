import express from "express";
import { testPlaid } from "../controllers/plaid.controller";

const router = express.Router();

router.get("/test", testPlaid);

export default router;