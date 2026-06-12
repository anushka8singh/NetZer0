import dotenv from "dotenv";

import connectDB from "./config/database";
// Load environment variables
dotenv.config();
import app from "./app";
const PORT = process.env.PORT || 5000;

// Function to start the application
const startServer = async (): Promise<void> => {
  try {
    // Connect to MongoDB first
    await connectDB();

    // Start Express server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();