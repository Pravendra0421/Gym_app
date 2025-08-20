import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import ConnectDb from "./config/database.js";
import "./config/firebaseAdmin.js";
import prisma from "./lib/prisma";
import authRoutes from "./routes/userRoute.js";
import cors from "cors";
const app = express();

ConnectDb();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.get("/", (req: Request, res: Response) => {
  res.send("welcome to the gym");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
