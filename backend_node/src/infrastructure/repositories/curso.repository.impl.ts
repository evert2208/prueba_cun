import { CreateCursoDto, CursoDatasource, CursoEntity, CursoRepository, LeccionEntity, UpdateCursoDto } from '../../domain';


export class CursoRepositoryImpl implements CursoRepository {

  constructor(
    private readonly datasource: CursoDatasource,
  ) { }


  create( createCursoDto: CreateCursoDto ): Promise<CursoEntity> {
    return this.datasource.create( createCursoDto );
  }

  getAll(): Promise<CursoEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<LeccionEntity[]> {
    return this.datasource.findById( id );
  }

  updateById( updateCursoDto: UpdateCursoDto ): Promise<CursoEntity> {
    return this.datasource.updateById( updateCursoDto );
  }

  deleteById( id: number ): Promise<CursoEntity> {
    return this.datasource.deleteById( id );
  }

}


