import {
  Bad_Habits,
  commit_duration,
  Daily_Walk_Duration,
  EVENT,
  Location_Workout,
  When_Event,
} from "@prisma/client";
export interface LifeStyleHabitsDto {
  daily_walk_duration: Daily_Walk_Duration;
  bad_habits: Bad_Habits[];
  lifestyle_satisfaction: number;
  sleep_duration_hours: number;
  wake_up_difficulty: string;
  morning_feeling: string;
  stress_frequency: string;
  wants_health_improvement: boolean;
  wants_stress_relief: boolean;
  workout_location: Location_Workout[];
  upcoming_event: EVENT;
  when_upcoming_event: When_Event;
  commitment_duration: commit_duration;
}
