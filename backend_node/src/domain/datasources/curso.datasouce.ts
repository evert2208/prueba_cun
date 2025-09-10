import { CreateCursoDto, UpdateCursoDto } from '../dtos';
import { CursoEntity } from '../entities/curso.entity';
import { LeccionEntity } from '../entities/leccion.entity';



export abstract class CursoDatasource {

  abstract create( createCursoDto: CreateCursoDto ): Promise<CursoEntity>;

  
  abstract getAll(): Promise<CursoEntity[]>;

  abstract findById( id: number ): Promise<LeccionEntity[] | any>;
  abstract updateById( updateCursoDto: UpdateCursoDto ): Promise<CursoEntity>;
  abstract deleteById( id: number ): Promise<CursoEntity>;

}