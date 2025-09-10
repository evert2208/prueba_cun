import { Request, Response } from 'express';
import { CreateCursoDto, UpdateCursoDto } from '../../domain/dtos';
import { CreateCurso, CursoRepository, CustomError, DeleteCurso, GetCurso, GetCursos, UpdateCurso } from '../../domain';


export class CursosController {

  //* DI
  constructor(
    private readonly cursoRepository: CursoRepository,
  ) { }

  private handleError = ( res: Response, error: unknown ) => {
    if ( error instanceof CustomError ) {
      res.status(error.statusCode).json({ error: error.message });
      return;
    }
    
    // grabar log
    res.status(500).json({ error: 'Internal server error - check logs' });
  }


  public getCursos = ( req: Request, res: Response ) => {

    new GetCursos( this.cursoRepository )
      .execute()
      .then( (cursos: any) => res.json( cursos ) )
      .catch( (error: any) => this.handleError(res, error) );

  };

  public getLeccionById = ( req: Request | any, res: Response ) => {
    const id = +req.params.id;

    new GetCurso( this.cursoRepository )
      .execute( id )
      .then( (curso: any) => res.json( curso ) )
      .catch( (error: any) => this.handleError(res, error) );

  };

  public createCurso = ( req: Request, res: Response ) => {
    const [ error, createCursoDto ] = CreateCursoDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreateCurso( this.cursoRepository )
      .execute( createCursoDto! )
      .then( (curso: any) => res.status(201).json( curso ) )
      .catch( (error: any) => this.handleError(res, error) );

  };

  public updateCurso = ( req: Request | any, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateCursoDto ] = UpdateCursoDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    new UpdateCurso( this.cursoRepository )
      .execute( updateCursoDto! )
      .then( (curso: any) => res.json( curso ) )
      .catch( (error: any) => this.handleError(res, error) );

  };


  public deleteCurso = ( req: Request|any, res: Response ) => {
    const id = +req.params.id;

    new DeleteCurso( this.cursoRepository )
      .execute( id )
      .then( (curso: any) => res.json( curso ) )
      .catch( (error: any) => this.handleError(res, error) );

  };



} 