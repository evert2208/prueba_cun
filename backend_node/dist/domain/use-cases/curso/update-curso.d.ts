import { UpdateCursoDto } from '../../dtos';
import { CursoEntity } from '../../entities/curso.entity';
import { CursoRepository } from '../../repositories/curso.repository';
export interface UpdateCursoUseCase {
    execute(dto: UpdateCursoDto): Promise<CursoEntity>;
}
export declare class UpdateCurso implements UpdateCursoUseCase {
    private readonly repository;
    constructor(repository: CursoRepository);
    execute(dto: UpdateCursoDto): Promise<CursoEntity>;
}
//# sourceMappingURL=update-curso.d.ts.map