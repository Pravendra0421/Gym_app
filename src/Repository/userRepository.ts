import { UserDto } from "../Dtos/userDtos.js";
import { UserEntity } from "../Entity/userEntity.js";
import prisma from "../lib/prisma.js";

export interface IUserRepository {
  create(data: UserDto): Promise<UserEntity>;
  findByFirebaseuid(firebaseUid: string): Promise<UserEntity>;
}
export class USerRepository implements IUserRepository {
  async create(data: UserDto): Promise<UserEntity> {
    const createUser = await prisma.user.create({
      data: {
        email: data.email,
        firebaseUid: data.firebaseuid,
      },
    });
    return createUser;
  }

  async findByFirebaseuid(firebaseUid: string): Promise<UserEntity> {
    const findByFireBaseID = await prisma.user.findUnique({
      where: {
        firebaseUid,
      },
    });
    return findByFireBaseID;
  }
}
