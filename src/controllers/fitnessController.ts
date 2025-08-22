import { FitnessRepository } from "../Repository/fitnessAssignmentRepository.js";
import { Request, Response } from "express";
import { FitnessUseCase } from "../UseCase/fitnessAssignmentUsecase.js";
import { fitnessAssignmentDto } from "../Dtos/fitnessAssignmentDtos.js";
import { USerRepository } from "../Repository/userRepository.js";

const fitnessRepository = new FitnessRepository();
const userRepository = new USerRepository();
const fitnessusecase = new FitnessUseCase(fitnessRepository, userRepository);

export class FitnessController {
  async create(req: Request, res: Response) {
    try {
      const data: fitnessAssignmentDto = req.body;
      const firebaseUid = req.User.uid;
      if (!firebaseUid) {
        return res.status(404).json({
          message: "Unauthorized : user not found in token",
        });
      }
      const newFitness = await fitnessusecase.createFitnessUsecase(
        data,
        firebaseUid
      );
      return res.status(201).json(newFitness);
    } catch (error) {
      console.error("Error creating fitness:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async update(req: Request, res: Response) {
    try {
      const data: Partial<fitnessAssignmentDto> = req.body;
      console.log(data);
      const firebaseUid = req.User.uid;
      if (!firebaseUid) {
        return res.status(404).json({
          message: "Unauthorized :User not found in token",
        });
      }
      const updateFitness = await fitnessusecase.updateFitnessUsecase(
        data,
        firebaseUid
      );
      return res.status(201).json(updateFitness);
    } catch (error) {
      console.error("Error update fitness:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async get(req: Request, res: Response) {
    try {
      const firebaseUid = req.User.uid;
      if (!firebaseUid) {
        return res.status(404).json({
          message: "Unauthorized :User not found in token",
        });
      }
      const getFitness = await fitnessusecase.getFitnessUsecase(firebaseUid);
      return res.status(201).json(getFitness);
    } catch (error) {
      console.error("Error get fitness:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
