import { CursoEntity } from '../../entities/curso.entity';
import { CursoRepository } from '../../repositories/curso.repository';


export interface GetCursosUseCase {
  execute(): Promise<CursoEntity[]>
}


export class GetCursos implements GetCursosUseCase {
  
  constructor(
    private readonly repository: CursoRepository,
  ) {}
  
  execute(): Promise<CursoEntity[]> {
    return this.repository.getAll();
  }

}

