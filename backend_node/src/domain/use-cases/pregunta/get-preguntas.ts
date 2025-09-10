import { PreguntaEntity } from "../../entities/pregunta.entity";
import { PreguntaRepository } from "../../repositories/pregunta.repository";


export interface GetPreguntasUseCase {
  execute(): Promise<PreguntaEntity[]>
}


export class GetPreguntas implements GetPreguntasUseCase {
  
  constructor(
    private readonly repository: PreguntaRepository,
  ) {}
  
  execute(): Promise<PreguntaEntity[]> {
    return this.repository.getAll();
  }

}

