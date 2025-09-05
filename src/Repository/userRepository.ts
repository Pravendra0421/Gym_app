import { UserDto } from "../Dtos/userDtos.js";
import { UserEntity } from "../Entity/userEntity.js";
import { UserUpdateDto } from "../Dtos/userDtos.js";
import { UserUpdateEntity } from "../Entity/userEntity.js";
import prisma from "../lib/prisma.js";

export interface IUserRepository {
  create(data: UserDto): Promise<UserEntity>;
  update(data: Partial<UserUpdateDto>, id: string): Promise<UserUpdateEntity>;
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
  async update(
    data: Partial<UserUpdateDto>,
    id: string
  ): Promise<UserUpdateEntity> {
    const update = await prisma.user.update({
      where: { id: id },
      data: {
        ...data,
      },
    });
    return update as UserUpdateEntity;
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
