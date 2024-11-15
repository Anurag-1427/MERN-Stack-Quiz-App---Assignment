import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import authRoute from "./routes/auth.route.js";
import quizRoute from "./routes/quiz.route.js";

dotenv.config({ path: "./.env" });

const mongoURI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;

connectDB(mongoURI);

const app = express();

// Using Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/quiz", quizRoute);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
