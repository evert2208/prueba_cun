

export class UpdateLeccionDto {

  private constructor(
    public readonly id: number,
    public readonly nombre?: string,
    public readonly cursoId?: number,
  ){}

  get values() {
    const returnObj: {[key: string]: any} = {};

    if ( this.nombre ) returnObj.nombre = this.nombre;
    if ( this.cursoId ) returnObj.cursoId = this.cursoId;

    return returnObj;
  }


  static create( props: {[key:string]: any} ): [string | undefined, UpdateLeccionDto| undefined]  {

    const { id, nombre, cursoId } = props;


    if ( !id || isNaN( Number(id)) ) {
      return ['id must be a valid number', undefined];
    }



    return [undefined, new UpdateLeccionDto(id, nombre, cursoId)];
  }


}