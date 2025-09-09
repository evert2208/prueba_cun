import { CreateCursoDto, CursoDatasource, CursoEntity, CursoRepository, UpdateCursoDto } from '../../domain';
export declare class CursoRepositoryImpl implements CursoRepository {
    private readonly datasource;
    constructor(datasource: CursoDatasource);
    create(createCursoDto: CreateCursoDto): Promise<CursoEntity>;
    getAll(): Promise<CursoEntity[]>;
    findById(id: number): Promise<CursoEntity>;
    updateById(updateCursoDto: UpdateCursoDto): Promise<CursoEntity>;
    deleteById(id: number): Promise<CursoEntity>;
}
//# sourceMappingURL=curso.repository.impl.d.ts.map