import { LeccionEntity } from "./leccion.entity";


export class PreguntaEntity {

  constructor(
    public id: number,
    public enunciado: string,
    public opciones: string[],
    public respuestaCorrecta: string,
    public leccionId: number,
    public leccion?: LeccionEntity,
    
  ) {}


  public static fromObject( object: {[key: string]: any} ): PreguntaEntity {
    const { id, enunciado, opciones, respuestaCorrecta, leccionId, leccion} = object;
    if ( !id ) throw 'Id is required';
    if ( !enunciado ) throw 'enunciado is required';
    if ( !leccionId ) throw 'leccionId is required';

    // const leccionesEntity = lecciones 
    //   ? lecciones.map((leccion: any) => LeccionEntity.fromObject(leccion))
    //   : undefined;

    return new PreguntaEntity(id, enunciado, opciones, respuestaCorrecta, leccionId, leccion)
  }

}


