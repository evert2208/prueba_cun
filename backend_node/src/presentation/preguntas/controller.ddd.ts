import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreatePreguntaDto, PreguntaRepository, UpdatePreguntaDto } from '../../domain';




export class PreguntasController {

  //* DI
  constructor(
    private readonly preguntaRepository: PreguntaRepository,
  ) { }


  public getPreguntas = async ( req: Request, res: Response ) => {
    const preguntas = await this.preguntaRepository.getAll();
    return res.json( preguntas );
  };

  public getById = async ( req: Request | any, res: Response ) => {
    const id = +req.params.id;

    try {
      const pregunta = await this.preguntaRepository.findById( id );
      res.json( pregunta );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createPregunta = async ( req: Request, res: Response ) => {
    const [ error, createPregutnaDto ] = CreatePreguntaDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const pregunta = await this.preguntaRepository.create( createPregutnaDto! );
    res.json( pregunta );

  };

  public updatePregunta = async ( req: Request | any, res: Response ) => {
    const id = +req.params.id;
    const [ error, updatePreguntaDto ] = UpdatePreguntaDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedPregunta = await this.preguntaRepository.updateById( updatePreguntaDto! );
    return res.json( updatedPregunta );

  };


  public deletePregunta = async ( req: Request | any, res: Response ) => {
    const id = +req.params.id;
    const deletedPregunta = await this.preguntaRepository.deleteById( id );
    res.json( deletedPregunta );

  };



}