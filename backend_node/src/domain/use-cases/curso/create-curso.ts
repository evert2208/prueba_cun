import { CreateCursoDto } from '../../dtos';
import { CursoEntity } from '../../entities/curso.entity';
import { CursoRepository } from '../../repositories/curso.repository';


export interface CreateCursoUseCase {
  execute( dto: CreateCursoDto ): Promise<CursoEntity>
}


export class CreateCurso implements CreateCursoUseCase {
  
  constructor(
    private readonly repository: CursoRepository,
  ) {}
  
  execute( dto: CreateCursoDto ): Promise<CursoEntity> {
    return this.repository.create(dto);
  }

}

