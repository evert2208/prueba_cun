import { PreguntaEntity } from "../../entities/pregunta.entity";
import { PreguntaRepository } from "../../repositories/pregunta.repository";


export interface DeletePreguntaUseCase {
  execute( id: number ): Promise<PreguntaEntity>
}


export class DeletePregunta implements DeletePreguntaUseCase {
  
  constructor(
    private readonly repository: PreguntaRepository,
  ) {}
  
  execute( id: number ): Promise<PreguntaEntity> {
    return this.repository.deleteById(id);
  }

}

