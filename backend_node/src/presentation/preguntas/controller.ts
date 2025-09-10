import { Request, Response } from 'express';
import { CreatePregunta, CreatePreguntaDto, CustomError, DeletePregunta, GetPregunta, GetPreguntas, PreguntaRepository, UpdatePregunta, UpdatePreguntaDto } from '../../domain';


export class PreguntasController {

  //* DI
  constructor(
    private readonly preguntaRepository: PreguntaRepository,
  ) { }

  private handleError = ( res: Response, error: unknown ) => {
    if ( error instanceof CustomError ) {
      res.status(error.statusCode).json({ error: error.message });
      return;
    }
    
    // grabar log
    res.status(500).json({ error: 'Internal server error - check logs' });
  }


  public getPreguntas = ( req: Request, res: Response ) => {

    new GetPreguntas( this.preguntaRepository )
      .execute()
      .then( (preguntas: any) => res.json( preguntas ) )
      .catch( (error: any) => this.handleError(res, error) );

  };

  public getById = ( req: Request | any, res: Response ) => {
    const id = +req.params.id;

    new GetPregunta( this.preguntaRepository )
      .execute( id )
      .then( (pregunta: any) => res.json( pregunta ) )
      .catch( (error: any) => this.handleError(res, error) );

  };

  public createPregunta = ( req: Request, res: Response ) => {
    const [ error, createPreguntaDto ] = CreatePreguntaDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreatePregunta( this.preguntaRepository )
      .execute( createPreguntaDto! )
      .then( (pregunta: any) => res.status(201).json( pregunta ) )
      .catch( (error: any) => this.handleError(res, error) );

  };

  public updatePregunta = ( req: Request | any, res: Response ) => {
    const id = +req.params.id;
    const [ error, updatePreguntaDto ] = UpdatePreguntaDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    new UpdatePregunta( this.preguntaRepository )
      .execute( updatePreguntaDto! )
      .then( (pregunta: any) => res.json( pregunta ) )
      .catch( (error: any) => this.handleError(res, error) );

  };


  public deletePregunta = ( req: Request|any, res: Response ) => {
    const id = +req.params.id;

    new DeletePregunta( this.preguntaRepository )
      .execute( id )
      .then( (pregunta: any) => res.json( pregunta ) )
      .catch( (error: any) => this.handleError(res, error) );

  };



} 