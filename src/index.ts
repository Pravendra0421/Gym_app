import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import ConnectDb from "./config/database.js";
import "./config/firebaseAdmin.js";
import prisma from "./lib/prisma";
import authRoutes from "./routes/userRoute.js";
import exerciseRoutes from "./routes/exerciseRoute.js";
import dailyWorkoutRoute from "./routes/dailyWorkoutRoute.js";
import dailyWorkoutExerciseRoute from "./routes/dailyWorkoutExerciseRoute.js";
import WorkoutPlanRoute from "./routes/workoutPlanRoute.js";
import cors from "cors";
const app = express();

ConnectDb();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/exercise", exerciseRoutes);
app.use("/api/daily-workout", dailyWorkoutRoute);
app.use("/api/daily-workout-exercise", dailyWorkoutExerciseRoute);
app.use("/api/workout-plan", WorkoutPlanRoute);
app.get("/", (req: Request, res: Response) => {
  res.send("welcome to the gym");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
