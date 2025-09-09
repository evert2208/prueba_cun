import { Request, Response } from 'express';
import { TodoRepository } from '../../domain';
export declare class TodosController {
    private readonly todoRepository;
    constructor(todoRepository: TodoRepository);
    private handleError;
    getTodos: (req: Request, res: Response) => void;
    getTodoById: (req: Request, res: Response) => void;
    createTodo: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
    updateTodo: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
    deleteTodo: (req: Request, res: Response) => void;
}
//# sourceMappingURL=controller.d.ts.map