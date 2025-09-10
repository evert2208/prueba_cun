import { prisma } from '../../data/postgres';
import { CreateLeccionDto, CustomError, LeccionDatasource, LeccionEntity, UpdateLeccionDto } from '../../domain';




export class LeccionDatasourceImpl implements LeccionDatasource {

  async create( createLeccionDto: CreateLeccionDto ): Promise<LeccionEntity> {
    const leccion = await prisma.leccion.create({
      data: createLeccionDto!
    });

    return LeccionEntity.fromObject( leccion );
  }

  async getAll(): Promise<LeccionEntity[]> {
    const lecciones = await prisma.leccion.findMany();
    return lecciones.map( (leccion: any) => LeccionEntity.fromObject(leccion) );
  }

  async findById( id: number ): Promise<LeccionEntity> {
    const leccion = await prisma.leccion.findFirst({
      where: { id }
    });

    if ( !leccion ) throw new CustomError(`Leccion with id ${ id } not found`, 404);
    return LeccionEntity.fromObject(leccion);
  }

  async updateById( updateLeccionDto: UpdateLeccionDto ): Promise<LeccionEntity> {
    await this.findById( updateLeccionDto.id );
    
    const updatedLeccion = await prisma.leccion.update({
      where: { id: updateLeccionDto.id },
      data: updateLeccionDto!.values
    });

    return LeccionEntity.fromObject(updatedLeccion);
  }

  async deleteById( id: number ): Promise<LeccionEntity> {
    await this.findById( id );
    const deleted = await prisma.leccion.delete({
      where: { id }
    });

    return LeccionEntity.fromObject( deleted );
  }

}