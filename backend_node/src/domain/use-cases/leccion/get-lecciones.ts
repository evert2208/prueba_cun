import { LeccionEntity } from "../../entities/leccion.entity";
import { LeccionRepository } from "../../repositories/leccion.repository";



export interface GetLeccionesUseCase {
  execute(): Promise<LeccionEntity[]>
}


export class GetLecciones implements GetLeccionesUseCase {
  
  constructor(
    private readonly repository: LeccionRepository,
  ) {}
  
  execute(): Promise<LeccionEntity[]> {
    return this.repository.getAll();
  }

}

