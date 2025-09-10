import { CursoEntity } from '../../entities/curso.entity';
import { LeccionEntity } from '../../entities/leccion.entity';
import { CursoRepository } from '../../repositories/curso.repository';


export interface GetCursoUseCase {
  execute( id: number ): Promise<LeccionEntity[]>
}


export class GetCurso implements GetCursoUseCase {
  
  constructor(
    private readonly repository: CursoRepository,
  ) {}
  
  execute( id: number ): Promise<LeccionEntity[]> {
    return this.repository.findById(id);
  }

}

