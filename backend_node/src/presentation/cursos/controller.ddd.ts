import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateCursoDto, CursoRepository, UpdateCursoDto } from '../../domain';


export class TodosController {

  //* DI
  constructor(
    private readonly cursoRepository: CursoRepository,
  ) { }


  public getCursos = async ( req: Request, res: Response ) => {
    const cursos = await this.cursoRepository.getAll();
    return res.json( cursos );
  };

  public getCursoById = async ( req: Request | any, res: Response ) => {
    const id = +req.params.id;

    try {
      const curso = await this.cursoRepository.findById( id );
      res.json( curso );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createCurso = async ( req: Request, res: Response ) => {
    const [ error, createCursoDto ] = CreateCursoDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const curso = await this.cursoRepository.create( createCursoDto! );
    res.json( curso );

  };

  public updateCurso = async ( req: Request | any, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateCursoDto ] = UpdateCursoDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedCurso = await this.cursoRepository.updateById( updateCursoDto! );
    return res.json( updatedCurso );

  };


  public deleteCurso = async ( req: Request | any, res: Response ) => {
    const id = +req.params.id;
    const deletedCurso = await this.cursoRepository.deleteById( id );
    res.json( deletedCurso );

  };



}