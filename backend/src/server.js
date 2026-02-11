import express from "express";
import noteRoutes from "./routes/noteRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

// Load .env variables
dotenv.config();

// connect to database
connectDB();

const app = express();
// Middleware to parse JSON bodies
app.use(express.json());


app.use("/api/notes", noteRoutes);


// Start server

// Use PORT from environment variables or default to 5001
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


// app.listen(5001,() => {
//     console.log("Server is running on port 5001");
// });