import { Request, Response } from 'express';
import { TodoRepository } from '../../domain';
export declare class TodosController {
    private readonly todoRepository;
    constructor(todoRepository: TodoRepository);
    getTodos: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getTodoById: (req: Request, res: Response) => Promise<void>;
    createTodo: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    updateTodo: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteTodo: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=controller.ddd.d.ts.map