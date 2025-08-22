import { Self_Active, Self_Fit, WorkOut_Experiance } from "@prisma/client";
export interface fitnessAssignmentEntity {
  id: string;
  userId: string;
  prev_workout_experiance: WorkOut_Experiance;
  self_assessed_fitness: Self_Fit;
  self_assessed_activity: Self_Active;
  has_knee_pain: boolean;
  squat_reps: number;
  pushup_reps: number;
  plank_duration_seconds: number;
}
