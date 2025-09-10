import { LeccionEntity } from "../../entities/leccion.entity";
import { LeccionRepository } from "../../repositories/leccion.repository";



export interface DeleteLeccionUseCase {
  execute( id: number ): Promise<LeccionEntity>
}


export class DeleteLeccion implements DeleteLeccionUseCase {
  
  constructor(
    private readonly repository: LeccionRepository,
  ) {}
  
  execute( id: number ): Promise<LeccionEntity> {
    return this.repository.deleteById(id);
  }

}

