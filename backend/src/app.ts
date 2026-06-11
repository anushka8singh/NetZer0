import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";

const app = express();

// Middleware first
app.use(cors());
app.use(express.json());

// Routes after middleware
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("NetZero API Running");
});

export default app;