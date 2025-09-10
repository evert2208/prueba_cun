import { CursoEntity } from "./curso.entity";


export class LeccionEntity {

  constructor(
    public id: number,
    public nombre: string,
    public cursoId: number,
    public curso?: CursoEntity,
    public preguntas?: any[]
  ) {}


  public static fromObject( object: {[key: string]: any} ): LeccionEntity {
    const { id, nombre, cursoId, curso, preguntas} = object;
    if ( !id ) throw 'Id is required';
    if ( !nombre ) throw 'nombre is required';
    if ( !cursoId ) throw 'curso is required';

    // const leccionesEntity = lecciones 
    //   ? lecciones.map((leccion: any) => LeccionEntity.fromObject(leccion))
    //   : undefined;

    return new LeccionEntity(id, nombre, cursoId, curso)
  }

}


