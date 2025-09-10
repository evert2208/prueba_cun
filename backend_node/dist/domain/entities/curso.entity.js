"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursoEntity = void 0;
const leccion_entity_1 = require("./leccion.entity");
class CursoEntity {
    constructor(id, nombre, descripcion, lecciones) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.lecciones = lecciones;
    }
    static fromObject(object) {
        const { id, nombre, descripcion, lecciones } = object;
        if (!id)
            throw 'Id is required';
        if (!nombre)
            throw 'nombre is required';
        if (!descripcion)
            throw 'descripcion is required';
        const leccionesEntity = lecciones
            ? lecciones.map((leccion) => leccion_entity_1.LeccionEntity.fromObject(leccion))
            : undefined;
        return new CursoEntity(id, nombre, descripcion, leccionesEntity);
    }
}
exports.CursoEntity = CursoEntity;
//# sourceMappingURL=curso.entity.js.map