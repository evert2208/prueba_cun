import { CursoEntity } from '../../entities/curso.entity';
import { CursoRepository } from '../../repositories/curso.repository';
export interface GetCursoUseCase {
    execute(id: number): Promise<CursoEntity>;
}
export declare class GetCurso implements GetCursoUseCase {
    private readonly repository;
    constructor(repository: CursoRepository);
    execute(id: number): Promise<CursoEntity>;
}
//# sourceMappingURL=get-curso.d.ts.map