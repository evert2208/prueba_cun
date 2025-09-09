"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursosController = void 0;
const dtos_1 = require("../../domain/dtos");
const domain_1 = require("../../domain");
class CursosController {
    //* DI
    constructor(cursoRepository) {
        this.cursoRepository = cursoRepository;
        this.handleError = (res, error) => {
            if (error instanceof domain_1.CustomError) {
                res.status(error.statusCode).json({ error: error.message });
                return;
            }
            // grabar log
            res.status(500).json({ error: 'Internal server error - check logs' });
        };
        this.getCursos = (req, res) => {
            new domain_1.GetCursos(this.cursoRepository)
                .execute()
                .then((cursos) => res.json(cursos))
                .catch((error) => this.handleError(res, error));
        };
        this.getCursoById = (req, res) => {
            const id = +req.params.id;
            new domain_1.GetCurso(this.cursoRepository)
                .execute(id)
                .then((curso) => res.json(curso))
                .catch((error) => this.handleError(res, error));
        };
        this.createCurso = (req, res) => {
            const [error, createCursoDto] = dtos_1.CreateCursoDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            new domain_1.CreateCurso(this.cursoRepository)
                .execute(createCursoDto)
                .then((curso) => res.status(201).json(curso))
                .catch((error) => this.handleError(res, error));
        };
        this.updateCurso = (req, res) => {
            const id = +req.params.id;
            const [error, updateCursoDto] = dtos_1.UpdateCursoDto.create({ ...req.body, id });
            if (error)
                return res.status(400).json({ error });
            new domain_1.UpdateCurso(this.cursoRepository)
                .execute(updateCursoDto)
                .then((curso) => res.json(curso))
                .catch((error) => this.handleError(res, error));
        };
        this.deleteCurso = (req, res) => {
            const id = +req.params.id;
            new domain_1.DeleteCurso(this.cursoRepository)
                .execute(id)
                .then((curso) => res.json(curso))
                .catch((error) => this.handleError(res, error));
        };
    }
}
exports.CursosController = CursosController;
//# sourceMappingURL=controller.js.map