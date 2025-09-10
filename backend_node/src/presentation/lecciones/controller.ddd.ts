import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateLeccionDto, LeccionRepository, UpdateLeccionDto } from '../../domain';



export class LeccionesController {

  //* DI
  constructor(
    private readonly leccionRepository: LeccionRepository,
  ) { }


  public getLecciones = async ( req: Request, res: Response ) => {
    const lecciones = await this.leccionRepository.getAll();
    return res.json( lecciones );
  };

  public getLeccionById = async ( req: Request | any, res: Response ) => {
    const id = +req.params.id;

    try {
      const leccion = await this.leccionRepository.findById( id );
      res.json( leccion );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createLeccion = async ( req: Request, res: Response ) => {
    const [ error, createLeccionDto ] = CreateLeccionDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const leccion = await this.leccionRepository.create( createLeccionDto! );
    res.json( leccion );

  };

  public updateLeccion = async ( req: Request | any, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateLeccionDto ] = UpdateLeccionDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedLeccion = await this.leccionRepository.updateById( updateLeccionDto! );
    return res.json( updatedLeccion );

  };


  public deleteLeccion = async ( req: Request | any, res: Response ) => {
    const id = +req.params.id;
    const deletedLeccion = await this.leccionRepository.deleteById( id );
    res.json( deletedLeccion );

  };



}