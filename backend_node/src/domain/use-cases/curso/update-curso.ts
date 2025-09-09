import { UpdateCursoDto } from '../../dtos';
import { CursoEntity } from '../../entities/curso.entity';
import { CursoRepository } from '../../repositories/curso.repository';


export interface UpdateCursoUseCase {
  execute( dto: UpdateCursoDto ): Promise<CursoEntity>
}


export class UpdateCurso implements UpdateCursoUseCase {
  
  constructor(
    private readonly repository: CursoRepository,
  ) {}
  
  execute( dto: UpdateCursoDto ): Promise<CursoEntity> {
    return this.repository.updateById(dto);
  }

}

