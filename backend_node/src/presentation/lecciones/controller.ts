import { Request, Response } from 'express';
import { CreateLeccion, CreateLeccionDto, CustomError, DeleteLeccion, GetLeccion, GetLecciones, LeccionRepository, UpdateLeccion, UpdateLeccionDto } from '../../domain';


export class LeccionesController {

  //* DI
  constructor(
    private readonly leccionRepository: LeccionRepository,
  ) { }

  private handleError = ( res: Response, error: unknown ) => {
    if ( error instanceof CustomError ) {
      res.status(error.statusCode).json({ error: error.message });
      return;
    }
    
    // grabar log
    res.status(500).json({ error: 'Internal server error - check logs' });
  }


  public getLecciones = ( req: Request, res: Response ) => {

    new GetLecciones( this.leccionRepository )
      .execute()
      .then( (lecciones: any) => res.json( lecciones ) )
      .catch( (error: any) => this.handleError(res, error) );

  };

  public getLeccionById = ( req: Request | any, res: Response ) => {
    const id = +req.params.id;

    new GetLeccion( this.leccionRepository )
      .execute( id )
      .then( (leccion: any) => res.json( leccion ) )
      .catch( (error: any) => this.handleError(res, error) );

  };

  public createLeccion = ( req: Request, res: Response ) => {
    const [ error, createLeccionDto ] = CreateLeccionDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreateLeccion( this.leccionRepository )
      .execute( createLeccionDto! )
      .then( (leccion: any) => res.status(201).json( leccion ) )
      .catch( (error: any) => this.handleError(res, error) );

  };

  public updateLeccion = ( req: Request | any, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateLeccionDto ] = UpdateLeccionDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    new UpdateLeccion( this.leccionRepository )
      .execute( updateLeccionDto! )
      .then( (leccion: any) => res.json( leccion ) )
      .catch( (error: any) => this.handleError(res, error) );

  };


  public deleteLeccion = ( req: Request|any, res: Response ) => {
    const id = +req.params.id;

    new DeleteLeccion( this.leccionRepository )
      .execute( id )
      .then( (leccion: any) => res.json( leccion ) )
      .catch( (error: any) => this.handleError(res, error) );

  };



} 