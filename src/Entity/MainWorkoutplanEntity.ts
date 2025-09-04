export interface MainWorkoutplanEntity {
  id: string;
  name: string;
  cardio: number;
  Strength: number;
  fitnessCategoryId: string;
  durationInWeeks: number;
  willAchieve: string[];
  howAchieve: string[];
}
