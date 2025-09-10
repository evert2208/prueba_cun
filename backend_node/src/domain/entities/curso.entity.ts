import { LeccionEntity } from "./leccion.entity";


export class CursoEntity {

  constructor(
    public id: number,
    public nombre: string,
    public descripcion: string,
    public lecciones?: LeccionEntity[]
  ) {}


  public static fromObject( object: {[key: string]: any} ): CursoEntity {
    const { id, nombre, descripcion, lecciones } = object;
    if ( !id ) throw 'Id is required';
    if ( !nombre ) throw 'nombre is required';
    if ( !descripcion ) throw 'descripcion is required';

    const leccionesEntity = lecciones 
      ? lecciones.map((leccion: any) => LeccionEntity.fromObject(leccion))
      : undefined;

    return new CursoEntity(id, nombre, descripcion, leccionesEntity)
  }

}


