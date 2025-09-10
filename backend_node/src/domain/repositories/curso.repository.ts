import { CreateCursoDto, UpdateCursoDto } from '../dtos';
import { CursoEntity } from '../entities/curso.entity';
import { LeccionEntity } from '../entities/leccion.entity';


export abstract class CursoRepository {

  abstract create( createCursoDto: CreateCursoDto ): Promise<CursoEntity>;

  
  abstract getAll(): Promise<CursoEntity[]>;

  abstract findById( id: number ): Promise<LeccionEntity[]>;
  abstract updateById( updateCursoDto: UpdateCursoDto ): Promise<CursoEntity>;
  abstract deleteById( id: number ): Promise<CursoEntity>;

}