export declare class UpdateCursoDto {
    readonly id: number;
    readonly nombre?: string | undefined;
    readonly descripcion?: string | undefined;
    private constructor();
    get values(): {
        [key: string]: any;
    };
    static create(props: {
        [key: string]: any;
    }): [string | undefined, UpdateCursoDto | undefined];
}
//# sourceMappingURL=update-curso.dto.d.ts.map