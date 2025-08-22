import { fitnessAssignmentDto } from "../Dtos/fitnessAssignmentDtos";
import { fitnessAssignmentEntity } from "../Entity/fitnessAssignmentEntity";
import { FitnessRepository } from "../Repository/fitnessAssignmentRepository";
import { USerRepository } from "../Repository/userRepository";
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
