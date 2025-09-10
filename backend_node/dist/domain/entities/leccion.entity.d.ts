import { CursoEntity } from "./curso.entity";
export declare class LeccionEntity {
    id: number;
    nombre: string;
    cursoId: number;
    curso?: CursoEntity | undefined;
    preguntas?: any[] | undefined;
    constructor(id: number, nombre: string, cursoId: number, curso?: CursoEntity | undefined, preguntas?: any[] | undefined);
    static fromObject(object: {
        [key: string]: any;
    }): LeccionEntity;
}
//# sourceMappingURL=leccion.entity.d.ts.map