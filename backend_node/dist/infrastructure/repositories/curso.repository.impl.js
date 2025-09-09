"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursoRepositoryImpl = void 0;
class CursoRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    create(createCursoDto) {
        return this.datasource.create(createCursoDto);
    }
    getAll() {
        return this.datasource.getAll();
    }
    findById(id) {
        return this.datasource.findById(id);
    }
    updateById(updateCursoDto) {
        return this.datasource.updateById(updateCursoDto);
    }
    deleteById(id) {
        return this.datasource.deleteById(id);
    }
}
exports.CursoRepositoryImpl = CursoRepositoryImpl;
//# sourceMappingURL=curso.repository.impl.js.map