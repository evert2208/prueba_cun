import { CreateCursoDto } from '../../dtos';
import { CursoEntity } from '../../entities/curso.entity';
import { CursoRepository } from '../../repositories/curso.repository';
export interface CreateCursoUseCase {
    execute(dto: CreateCursoDto): Promise<CursoEntity>;
}
export declare class CreateCurso implements CreateCursoUseCase {
    private readonly repository;
    constructor(repository: CursoRepository);
    execute(dto: CreateCursoDto): Promise<CursoEntity>;
}
//# sourceMappingURL=create-curso.d.ts.map