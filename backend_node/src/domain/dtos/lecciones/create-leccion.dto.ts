

export class CreateLeccionDto {

  private constructor(
    public readonly nombre: string,
    public readonly cursoId: number
  ){}


  static create( props: {[key:string]: any} ): [string | undefined, CreateLeccionDto | undefined]  {

    const { nombre, cursoId} = props;

    if ( !nombre || nombre.length === 0 ) return ['nombre property is required', undefined];
    if ( !cursoId) return ['cursoId property is required', undefined];

    return [undefined, new CreateLeccionDto(nombre, cursoId)];
  }


}