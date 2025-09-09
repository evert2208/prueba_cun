import { CursoEntity } from '../../entities/curso.entity';
import { CursoRepository } from '../../repositories/curso.repository';


export interface GetCursoUseCase {
  execute( id: number ): Promise<CursoEntity>
}


export class GetCurso implements GetCursoUseCase {
  
  constructor(
    private readonly repository: CursoRepository,
  ) {}
  
  execute( id: number ): Promise<CursoEntity> {
    return this.repository.findById(id);
  }

}

