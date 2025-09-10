import { UpdateLeccionDto } from "../../dtos";
import { LeccionEntity } from "../../entities/leccion.entity";
import { LeccionRepository } from "../../repositories/leccion.repository";


export interface UpdateLeccionUseCase {
  execute( dto: UpdateLeccionDto ): Promise<LeccionEntity>
}


export class UpdateLeccion implements UpdateLeccionUseCase {
  
  constructor(
    private readonly repository: LeccionRepository,
  ) {}
  
  execute( dto: UpdateLeccionDto ): Promise<LeccionEntity> {
    return this.repository.updateById(dto);
  }

}

