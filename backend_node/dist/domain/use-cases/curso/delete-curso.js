"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCurso = void 0;
class DeleteCurso {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.deleteById(id);
    }
}
exports.DeleteCurso = DeleteCurso;
//# sourceMappingURL=delete-curso.js.map