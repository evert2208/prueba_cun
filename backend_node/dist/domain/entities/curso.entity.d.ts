import { LeccionEntity } from "./leccion.entity";
export declare class CursoEntity {
    id: number;
    nombre: string;
    descripcion: string;
    lecciones?: LeccionEntity[] | undefined;
    constructor(id: number, nombre: string, descripcion: string, lecciones?: LeccionEntity[] | undefined);
    static fromObject(object: {
        [key: string]: any;
    }): CursoEntity;
}
//# sourceMappingURL=curso.entity.d.ts.map