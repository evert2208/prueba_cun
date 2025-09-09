"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursoRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const curso_datasource_impl_1 = require("../../infrastructure/datasource/curso.datasource.impl");
const curso_repository_impl_1 = require("../../infrastructure/repositories/curso.repository.impl");
class CursoRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new curso_datasource_impl_1.CursoDatasourceImpl();
        const cursoRepository = new curso_repository_impl_1.CursoRepositoryImpl(datasource);
        const cursoController = new controller_1.CursosController(cursoRepository);
        router.get('/', cursoController.getCursos);
        router.get('/:id', cursoController.getCursoById);
        router.post('/', cursoController.createCurso);
        router.put('/:id', cursoController.updateCurso);
        router.delete('/:id', cursoController.deleteCurso);
        return router;
    }
}
exports.CursoRoutes = CursoRoutes;
//# sourceMappingURL=routes.js.map