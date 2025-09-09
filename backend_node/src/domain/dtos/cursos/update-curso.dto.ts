

export class UpdateCursoDto {

  private constructor(
    public readonly id: number,
    public readonly nombre?: string,
    public readonly descripcion?: string,
  ){}

  get values() {
    const returnObj: {[key: string]: any} = {};

    if ( this.nombre ) returnObj.nombre = this.nombre;
    if ( this.descripcion ) returnObj.descripcion = this.descripcion;

    return returnObj;
  }


  static create( props: {[key:string]: any} ): [string | undefined, UpdateCursoDto| undefined]  {

    const { id, nombre, descripcion } = props;


    if ( !id || isNaN( Number(id)) ) {
      return ['id must be a valid number', undefined];
    }



    return [undefined, new UpdateCursoDto(id, nombre, descripcion)];
  }


}