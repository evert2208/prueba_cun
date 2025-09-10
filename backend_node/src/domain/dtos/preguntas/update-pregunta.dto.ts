

export class UpdatePreguntaDto {

  private constructor(
    public readonly id: number,
    public readonly enunciado?: string,
    public readonly opciones?: string[],
    public readonly respuestaCorrecta?: string,
    public readonly leccionId?: number
  ){}

  get values() {
    const returnObj: {[key: string]: any} = {};

    if ( this.enunciado ) returnObj.enunciado = this.enunciado;
    if ( this.leccionId ) returnObj.leccionId = this.leccionId;

    return returnObj;
  }


  static create( props: {[key:string]: any} ): [string | undefined, UpdatePreguntaDto| undefined]  {

    const { id, enunciado, opciones, respuestaCorrecta, leccionId} = props;


    if ( !id || isNaN( Number(id)) ) {
      return ['id must be a valid number', undefined];
    }



    return [undefined, new UpdatePreguntaDto(id, enunciado, opciones, respuestaCorrecta, leccionId)];
  }


}