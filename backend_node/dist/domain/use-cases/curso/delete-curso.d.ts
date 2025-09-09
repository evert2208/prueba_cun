import { CursoEntity } from '../../entities/curso.entity';
import { CursoRepository } from '../../repositories/curso.repository';
export interface DeleteCursoUseCase {
    execute(id: number): Promise<CursoEntity>;
}
export declare class DeleteCurso implements DeleteCursoUseCase {
    private readonly repository;
    constructor(repository: CursoRepository);
    execute(id: number): Promise<CursoEntity>;
}
//# sourceMappingURL=delete-curso.d.ts.map