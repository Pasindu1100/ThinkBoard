import express from "express";
import noteRoutes from "./routes/noteRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

// Load .env variables
dotenv.config();



const app = express();
// Middleware to parse JSON bodies
app.use(express.json());
app.use(rateLimiter);


app.use("/api/notes", noteRoutes);




// best practice is to connect to the database before starting the server, so that if there are any issues with the database connection, the server won't start and we can handle the error appropriately.
// connect to database


connectDB().then(() => {
  // Start server
  // Use PORT from environment variables or default to 5001
  const PORT = process.env.PORT || 5001;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    });
});



// app.listen(5001,() => {
//     console.log("Server is running on port 5001");
// });