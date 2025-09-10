import {CreateLeccionDto, UpdateLeccionDto} from '../dtos';
import { LeccionEntity } from '../entities/leccion.entity';



export abstract class LeccionRepository {

  abstract create( createLeccionDto: CreateLeccionDto ): Promise<LeccionEntity>;

  
  abstract getAll(): Promise<LeccionEntity[]>;

  abstract findById( id: number ): Promise<LeccionEntity>;
  abstract updateById( updateLeccionDto: UpdateLeccionDto ): Promise<LeccionEntity>;
  abstract deleteById( id: number ): Promise<LeccionEntity>;

}