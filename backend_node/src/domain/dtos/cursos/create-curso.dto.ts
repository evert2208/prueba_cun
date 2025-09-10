

export class CreateCursoDto {

  private constructor(
    public readonly nombre: string,
    public readonly descripcion: string,
  ){}


  static create( props: {[key:string]: any} ): [string | undefined, CreateCursoDto | undefined]  {

    const { nombre, descripcion} = props;

    if ( !nombre || nombre.length === 0 ) return ['nombre property is required', undefined];
    if ( !descripcion || descripcion.length === 0 ) return ['descripcion property is required', undefined];

    return [undefined, new CreateCursoDto(nombre,descripcion)];
  }


}