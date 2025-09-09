import { CursoEntity } from '../../entities/curso.entity';
import { CursoRepository } from '../../repositories/curso.repository';
export interface GetCursosUseCase {
    execute(): Promise<CursoEntity[]>;
}
export declare class GetCursos implements GetCursosUseCase {
    private readonly repository;
    constructor(repository: CursoRepository);
    execute(): Promise<CursoEntity[]>;
}
//# sourceMappingURL=get-cursos.d.ts.map