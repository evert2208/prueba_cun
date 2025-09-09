

export class CursoEntity {

  constructor(
    public id: number,
    public nombre: string,
    public descripcion: string,
    // public lecciones:
  ) {}


  public static fromObject( object: {[key: string]: any} ): CursoEntity {
    const { id, nombre, descripcion } = object;
    if ( !id ) throw 'Id is required';
    if ( !nombre ) throw 'nombre is required';
    if ( !descripcion ) throw 'descripcion is required';


    return new CursoEntity(id, nombre, descripcion)
  }

}


