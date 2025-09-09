"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCursos = void 0;
class GetCursos {
    constructor(repository) {
        this.repository = repository;
    }
    execute() {
        return this.repository.getAll();
    }
}
exports.GetCursos = GetCursos;
//# sourceMappingURL=get-cursos.js.map