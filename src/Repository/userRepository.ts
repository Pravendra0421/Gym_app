import { UserDto } from "../Dtos/userDtos.js";
import { UserEntity } from "../Entity/userEntity.js";
import prisma from "../lib/prisma.js";

export interface IUserRepository {
  create(data: UserDto): Promise<UserEntity>;
  findByFirebaseuid(firebaseUid: string): Promise<UserEntity | null>;
}
export class USerRepository implements IUserRepository {
  async create(data: UserDto): Promise<UserEntity> {
    const createUser = await prisma.user.create({
      data: {
        ...data,
        firebaseUid: data.firebaseUid,
        focusOn: data.focusOn,
        motivate: data.motivate,
        badHabit: data.badHabit,
        workOutPlace: data.workOutPlace,
        trainingDays: data.trainingDays,
      },
    });
    return createUser as UserEntity;
  }

  async findByFirebaseuid(firebaseUid: string): Promise<UserEntity> {
    const findByFireBaseID = await prisma.user.findUnique({
      where: {
        firebaseUid,
      },
    });
    return findByFireBaseID as UserEntity;
  }
}
