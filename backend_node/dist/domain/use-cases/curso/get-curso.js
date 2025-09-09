"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCurso = void 0;
class GetCurso {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.findById(id);
    }
}
exports.GetCurso = GetCurso;
//# sourceMappingURL=get-curso.js.map