import { IProfileRepository } from "../Repository/userProfileRepository.js";
import { ProfileDto } from "../Dtos/userProfileDtos.js";
import { ProfileEntity } from "../Entity/userProfileEntity.js";
import { IUserRepository } from "../Repository/userRepository.js";
export class ProfileUseCase {
  constructor(
    private profileRepository: IProfileRepository,
    private userRepository: IUserRepository
  ) {}
  async createProfileUSecase(
    data: ProfileDto,
    userId: string
  ): Promise<ProfileEntity> {
    const existingUser = await this.userRepository.findByFirebaseuid(userId);
    if (!existingUser) {
      throw new Error("please login ");
    }
    const userid = existingUser.id;
    const createProfile = await this.profileRepository.createProfile(
      data,
      userid
    );
    return createProfile;
  }
  async updateProfileUSecase(
    data: ProfileDto,
    userId: string
  ): Promise<ProfileEntity> {
    const existingUser = await this.userRepository.findByFirebaseuid(userId);
    if (!existingUser) {
      throw new Error("please login ");
    }
    const userid = existingUser.id;
    const updateProfile = await this.profileRepository.updateProfile(
      data,
      userid
    );
    return updateProfile;
  }
  async getProfileUSecase(userId: string): Promise<ProfileEntity> {
    const existingUser = await this.userRepository.findByFirebaseuid(userId);
    if (!existingUser) {
      throw new Error("please login ");
    }
    const userid = existingUser.id;
    const getProfile = await this.profileRepository.getProfile(userid);
    return getProfile;
  }
}
