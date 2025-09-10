import { PreguntaEntity } from "../../entities/pregunta.entity";
import { PreguntaRepository } from "../../repositories/pregunta.repository";


export interface GetPreguntaUseCase {
  execute( id: number ): Promise<PreguntaEntity>
}


export class GetPregunta implements GetPreguntaUseCase {
  
  constructor(
    private readonly repository: PreguntaRepository,
  ) {}
  
  execute( id: number ): Promise<PreguntaEntity> {
    return this.repository.findById(id);
  }

}

