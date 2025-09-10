"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeccionEntity = void 0;
class LeccionEntity {
    constructor(id, nombre, cursoId, curso, preguntas) {
        this.id = id;
        this.nombre = nombre;
        this.cursoId = cursoId;
        this.curso = curso;
        this.preguntas = preguntas;
    }
    static fromObject(object) {
        const { id, nombre, cursoId, curso, preguntas } = object;
        if (!id)
            throw 'Id is required';
        if (!nombre)
            throw 'nombre is required';
        if (!cursoId)
            throw 'curso is required';
        // const leccionesEntity = lecciones 
        //   ? lecciones.map((leccion: any) => LeccionEntity.fromObject(leccion))
        //   : undefined;
        return new LeccionEntity(id, nombre, cursoId, curso);
    }
}
exports.LeccionEntity = LeccionEntity;
//# sourceMappingURL=leccion.entity.js.map