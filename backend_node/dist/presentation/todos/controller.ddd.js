"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosController = void 0;
const dtos_1 = require("../../domain/dtos");
class TodosController {
    //* DI
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
        this.getTodos = async (req, res) => {
            const todos = await this.todoRepository.getAll();
            return res.json(todos);
        };
        this.getTodoById = async (req, res) => {
            const id = +req.params.id;
            try {
                const todo = await this.todoRepository.findById(id);
                res.json(todo);
            }
            catch (error) {
                res.status(400).json({ error });
            }
        };
        this.createTodo = async (req, res) => {
            const [error, createTodoDto] = dtos_1.CreateTodoDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const todo = await this.todoRepository.create(createTodoDto);
            res.json(todo);
        };
        this.updateTodo = async (req, res) => {
            const id = +req.params.id;
            const [error, updateTodoDto] = dtos_1.UpdateTodoDto.create({ ...req.body, id });
            if (error)
                return res.status(400).json({ error });
            const updatedTodo = await this.todoRepository.updateById(updateTodoDto);
            return res.json(updatedTodo);
        };
        this.deleteTodo = async (req, res) => {
            const id = +req.params.id;
            const deletedTodo = await this.todoRepository.deleteById(id);
            res.json(deletedTodo);
        };
    }
}
exports.TodosController = TodosController;
//# sourceMappingURL=controller.ddd.js.map