"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCursoDto = void 0;
class UpdateCursoDto {
    constructor(id, nombre, descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
    get values() {
        const returnObj = {};
        if (this.nombre)
            returnObj.nombre = this.nombre;
        if (this.descripcion)
            returnObj.descripcion = this.descripcion;
        return returnObj;
    }
    static create(props) {
        const { id, nombre, descripcion } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number', undefined];
        }
        return [undefined, new UpdateCursoDto(id, nombre, descripcion)];
    }
}
exports.UpdateCursoDto = UpdateCursoDto;
//# sourceMappingURL=update-curso.dto.js.map