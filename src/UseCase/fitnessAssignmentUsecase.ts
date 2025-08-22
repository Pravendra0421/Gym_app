import { fitnessAssignmentDto } from "../Dtos/fitnessAssignmentDtos.js";
import { fitnessAssignmentEntity } from "../Entity/fitnessAssignmentEntity.js";
import { FitnessRepository } from "../Repository/fitnessAssignmentRepository.js";
import { USerRepository } from "../Repository/userRepository.js";
export class FitnessUseCase {
  constructor(
    private fitnessRepository: FitnessRepository,
    private userRepository: USerRepository
  ) {}
  async createFitnessUsecase(
    data: fitnessAssignmentDto,
    firebaseUid: string
  ): Promise<fitnessAssignmentEntity> {
    const existingUser = await this.userRepository.findByFirebaseuid(
      firebaseUid
    );
    if (!existingUser) {
      throw new Error("user does not exist please login");
    }
    const userId = existingUser.id;
    const createFitness = await this.fitnessRepository.createFitness(
      data,
      userId
    );
    return createFitness;
  }

  async updateFitnessUsecase(
    data: Partial<fitnessAssignmentDto>,
    firebaseUid: string
  ): Promise<fitnessAssignmentEntity> {
    const existingUser = await this.userRepository.findByFirebaseuid(
      firebaseUid
    );
    if (!existingUser) {
      throw new Error("user does not exist please login");
    }
    const userId = existingUser.id;
    const updateFitness = await this.fitnessRepository.updateFitness(
      data,
      userId
    );
    return updateFitness;
  }
  async getFitnessUsecase(
    firebaseUid: string
  ): Promise<fitnessAssignmentEntity> {
    const existingUser = await this.userRepository.findByFirebaseuid(
      firebaseUid
    );
    if (!existingUser) {
      throw new Error("user does not exist please login");
    }
    const userId = existingUser.id;
    const getFitness = await this.fitnessRepository.getFitness(userId);
    return getFitness;
  }
}
