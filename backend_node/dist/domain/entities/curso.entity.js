"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursoEntity = void 0;
class CursoEntity {
    constructor(id, nombre, descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
    static fromObject(object) {
        const { id, nombre, descripcion } = object;
        if (!id)
            throw 'Id is required';
        if (!nombre)
            throw 'nombre is required';
        if (!descripcion)
            throw 'descripcion is required';
        return new CursoEntity(id, nombre, descripcion);
    }
}
exports.CursoEntity = CursoEntity;
//# sourceMappingURL=curso.entity.js.map