"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCurso = void 0;
class CreateCurso {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.create(dto);
    }
}
exports.CreateCurso = CreateCurso;
//# sourceMappingURL=create-curso.js.map