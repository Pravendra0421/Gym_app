export interface dailyWorkoutExerciseEntity {
  id: string;
  dailyWorkoutId: string;
  exerciseId: string;
  sets?: number;
  reps?: string;
  durationSeconds?: number;
  order: number;
}
