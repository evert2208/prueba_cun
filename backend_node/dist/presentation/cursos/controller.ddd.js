"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosController = void 0;
const domain_1 = require("../../domain");
class TodosController {
    //* DI
    constructor(cursoRepository) {
        this.cursoRepository = cursoRepository;
        this.getCursos = async (req, res) => {
            const cursos = await this.cursoRepository.getAll();
            return res.json(cursos);
        };
        this.getCursoById = async (req, res) => {
            const id = +req.params.id;
            try {
                const curso = await this.cursoRepository.findById(id);
                res.json(curso);
            }
            catch (error) {
                res.status(400).json({ error });
            }
        };
        this.createCurso = async (req, res) => {
            const [error, createCursoDto] = domain_1.CreateCursoDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const curso = await this.cursoRepository.create(createCursoDto);
            res.json(curso);
        };
        this.updateCurso = async (req, res) => {
            const id = +req.params.id;
            const [error, updateCursoDto] = domain_1.UpdateCursoDto.create({ ...req.body, id });
            if (error)
                return res.status(400).json({ error });
            const updatedCurso = await this.cursoRepository.updateById(updateCursoDto);
            return res.json(updatedCurso);
        };
        this.deleteCurso = async (req, res) => {
            const id = +req.params.id;
            const deletedCurso = await this.cursoRepository.deleteById(id);
            res.json(deletedCurso);
        };
    }
}
exports.TodosController = TodosController;
//# sourceMappingURL=controller.ddd.js.map