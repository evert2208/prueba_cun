import { LeccionEntity } from '../../entities/leccion.entity';
import { LeccionRepository } from '../../repositories/leccion.repository';



export interface GetLeccionUseCase {
  execute( id: number ): Promise<LeccionEntity>
}


export class GetLeccion implements GetLeccionUseCase {
  
  constructor(
    private readonly repository: LeccionRepository,
  ) {}
  
  execute( id: number ): Promise<LeccionEntity> {
    return this.repository.findById(id);
  }

}

