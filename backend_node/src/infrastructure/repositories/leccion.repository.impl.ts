import { CreateLeccionDto, LeccionDatasource, LeccionEntity, LeccionRepository, UpdateLeccionDto } from "../../domain";



export class LeccionRepositoryImpl implements LeccionRepository {

  constructor(
    private readonly datasource: LeccionDatasource,
  ) { }


  create( createLeccionDto: CreateLeccionDto ): Promise<LeccionEntity> {
    return this.datasource.create( createLeccionDto );
  }

  getAll(): Promise<LeccionEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<LeccionEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateLeccionDto: UpdateLeccionDto ): Promise<LeccionEntity> {
    return this.datasource.updateById( updateLeccionDto );
  }

  deleteById( id: number ): Promise<LeccionEntity> {
    return this.datasource.deleteById( id );
  }

}


