import { Request, Response } from 'express';
import { CursoRepository } from '../../domain';
export declare class TodosController {
    private readonly cursoRepository;
    constructor(cursoRepository: CursoRepository);
    getCursos: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getCursoById: (req: Request | any, res: Response) => Promise<void>;
    createCurso: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    updateCurso: (req: Request | any, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteCurso: (req: Request | any, res: Response) => Promise<void>;
}
//# sourceMappingURL=controller.ddd.d.ts.map