"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCurso = void 0;
class UpdateCurso {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.updateById(dto);
    }
}
exports.UpdateCurso = UpdateCurso;
//# sourceMappingURL=update-curso.js.map