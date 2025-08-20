import {
  BodyType,
  DreamBodyShape,
  FocusArea,
  Gender,
  Goal,
} from "@prisma/client";

export interface ProfileEntity {
  id: string;
  userId: string;
  name: string;
  gender: Gender;
  age: number;
  height: number;
  currentWeight: number;
  targetWeight: number;
  bodyType: BodyType;
  dreamBodyShape: DreamBodyShape;
  goal: Goal;
  focusOn: FocusArea;
  createdAt: Date;
  updatedAt: Date;
}
