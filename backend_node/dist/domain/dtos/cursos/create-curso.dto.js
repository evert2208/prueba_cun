"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCursoDto = void 0;
class CreateCursoDto {
    constructor(nombre, descripcion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
    static create(props) {
        const { nombre, descripcion } = props;
        if (!nombre || nombre.length === 0)
            return ['nombre property is required', undefined];
        if (!descripcion || descripcion.length === 0)
            return ['nombre property is required', undefined];
        return [undefined, new CreateCursoDto(nombre, descripcion)];
    }
}
exports.CreateCursoDto = CreateCursoDto;
//# sourceMappingURL=create-curso.dto.js.map