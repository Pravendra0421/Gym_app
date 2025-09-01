export interface ExerciseDto {
  exerciseName: string;
  description?: string;
  category: string[];
  Hints?: string;
  Breathing?: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  imageUrl?: string;
  caloriesBurnedPerRep?: number;
  isPremium: boolean;
}
