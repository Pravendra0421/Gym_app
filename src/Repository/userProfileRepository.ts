import { ProfileDto } from "../Dtos/userProfileDtos";
import { ProfileEntity } from "../Entity/userProfileEntity";
import prisma from "../lib/prisma";

export interface IProfileRepository {
  createProfile(data: ProfileDto, userId: string): Promise<ProfileEntity>;
  updateProfile(data: ProfileDto, userId: string): Promise<ProfileEntity>;
  getProfile(userId: string): Promise<ProfileEntity>;
}
export class ProfileRepository implements IProfileRepository {
  async createProfile(
    data: ProfileDto,
    userId: string
  ): Promise<ProfileEntity> {
    const create = await prisma.userProfile.create({
      data: {
        name: data.name,
        gender: data.gender,
        age: data.age,
        height: data.height,
        currentWeight: data.currentWeight,
        targetWeight: data.targetWeight,
        bodyType: data.bodyType,
        dreamBodyShape: data.dreamBodyShape,
        goal: data.goal,
        focusOn: data.focusOn,
        userId: userId,
      },
    });
    return create as unknown as ProfileEntity;
  }
  async updateProfile(
    data: ProfileDto,
    userId: string
  ): Promise<ProfileEntity> {
    const update = await prisma.userProfile.update({
      where: { userId },
      data: {
        name: data.name,
        gender: data.gender,
        age: data.age,
        height: data.height,
        currentWeight: data.currentWeight,
        targetWeight: data.targetWeight,
        bodyType: data.bodyType,
        dreamBodyShape: data.dreamBodyShape,
        goal: data.goal,
        focusOn: data.focusOn,
        userId: userId,
      },
    });
    return update as unknown as ProfileEntity;
  }

  async getProfile(userId: string): Promise<ProfileEntity> {
    const getProfile = await prisma.userProfile.findFirst({
      where: { userId },
    });
    return getProfile as unknown as ProfileEntity;
  }
}
