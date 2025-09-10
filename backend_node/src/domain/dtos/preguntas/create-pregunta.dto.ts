

export class CreatePreguntaDto {

  private constructor(
    public readonly enunciado: string,
    public readonly opciones: string[],
    public readonly respuestaCorrecta: string,
    public readonly leccionId: number
  ){}


  static create( props: {[key:string]: any} ): [string | undefined, CreatePreguntaDto | undefined]  {

    const { enunciado, opciones, respuestaCorrecta, leccionId} = props;

    if ( !enunciado || enunciado.length === 0 ) return ['enunciado property is required', undefined];
    if ( !respuestaCorrecta || respuestaCorrecta.length === 0 ) return ['respuestaCorrecta property is required', undefined];
    if ( !leccionId) return ['leccionId property is required', undefined];

    return [undefined, new CreatePreguntaDto(enunciado, opciones,respuestaCorrecta,leccionId)];
  }


}