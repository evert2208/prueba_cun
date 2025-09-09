import { Request, Response } from 'express';
import { CursoRepository } from '../../domain';
export declare class CursosController {
    private readonly cursoRepository;
    constructor(cursoRepository: CursoRepository);
    private handleError;
    getCursos: (req: Request, res: Response) => void;
    getCursoById: (req: Request | any, res: Response) => void;
    createCurso: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
    updateCurso: (req: Request | any, res: Response) => Response<any, Record<string, any>> | undefined;
    deleteCurso: (req: Request | any, res: Response) => void;
}
//# sourceMappingURL=controller.d.ts.map