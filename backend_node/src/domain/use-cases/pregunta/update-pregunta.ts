import { UpdatePreguntaDto } from "../../dtos";
import { PreguntaEntity } from "../../entities/pregunta.entity";
import { PreguntaRepository } from "../../repositories/pregunta.repository";


export interface UpdatePreguntaUseCase {
  execute( dto: UpdatePreguntaDto ): Promise<PreguntaEntity>
}


export class UpdatePregunta implements UpdatePreguntaUseCase {
  
  constructor(
    private readonly repository: PreguntaRepository,
  ) {}
  
  execute( dto: UpdatePreguntaDto ): Promise<PreguntaEntity> {
    return this.repository.updateById(dto);
  }

}

