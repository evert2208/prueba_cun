import { CreateCursoDto, CursoDatasource, CursoEntity, UpdateCursoDto } from '../../domain';
export declare class CursoDatasourceImpl implements CursoDatasource {
    create(createCursoDto: CreateCursoDto): Promise<CursoEntity>;
    getAll(): Promise<CursoEntity[]>;
    findById(id: number): Promise<CursoEntity>;
    updateById(updateCursoDto: UpdateCursoDto): Promise<CursoEntity>;
    deleteById(id: number): Promise<CursoEntity>;
}
//# sourceMappingURL=curso.datasource.impl.d.ts.map