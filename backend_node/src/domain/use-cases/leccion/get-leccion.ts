import { LeccionEntity } from '../../entities/leccion.entity';
import { PreguntaEntity } from '../../entities/pregunta.entity';
import { LeccionRepository } from '../../repositories/leccion.repository';



export interface GetLeccionUseCase {
  execute( id: number ): Promise<PreguntaEntity[]>
}


export class GetLeccion implements GetLeccionUseCase {
  
  constructor(
    private readonly repository: LeccionRepository,
  ) {}
  
  execute( id: number ): Promise<PreguntaEntity[]> {
    return this.repository.findById(id);
  }

}

