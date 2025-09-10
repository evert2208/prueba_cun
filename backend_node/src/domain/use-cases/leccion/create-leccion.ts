import { CreateLeccionDto } from '../../dtos';
import { LeccionEntity } from '../../entities/leccion.entity';
import { LeccionRepository } from '../../repositories/leccion.repository';



export interface CreateLeccionUseCase {
  execute( dto: CreateLeccionDto ): Promise<LeccionEntity>
}


export class CreateLeccion implements CreateLeccionUseCase {
  
  constructor(
    private readonly repository: LeccionRepository,
  ) {}
  
  execute( dto: CreateLeccionDto ): Promise<LeccionEntity> {
    return this.repository.create(dto);
  }

}

