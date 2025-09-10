import { prisma } from '../../data/postgres';
import { CreateCursoDto, CursoDatasource, CustomError, CursoEntity, UpdateCursoDto, LeccionEntity } from '../../domain';




export class CursoDatasourceImpl implements CursoDatasource {

  async create( createCursoDto: CreateCursoDto ): Promise<CursoEntity> {
    const curso = await prisma.curso.create({
      data: createCursoDto!
    });

    return CursoEntity.fromObject( curso );
  }

  async getAll(): Promise<CursoEntity[]> {
    const cursos = await prisma.curso.findMany();
    return cursos.map( (curso: any) => CursoEntity.fromObject(curso) );
  }

  async findById( id: number ): Promise<LeccionEntity[]> {
    const lecciones:any[] = await prisma.leccion.findMany({
      where: { cursoId: id }
    });

    // if ( !lecciones ) throw new CustomError(`Lecciones with cursoid ${ id } not found`, 404);
    return lecciones.map( (leccion: any) => LeccionEntity.fromObject(leccion) );
  }

  async updateById( updateCursoDto: UpdateCursoDto ): Promise<CursoEntity> {
    await this.findById( updateCursoDto.id );
    
    const updatedCurso = await prisma.curso.update({
      where: { id: updateCursoDto.id },
      data: updateCursoDto!.values
    });

    return CursoEntity.fromObject(updatedCurso);
  }

  async deleteById( id: number ): Promise<CursoEntity> {
    await this.findById( id );
    const deleted = await prisma.curso.delete({
      where: { id }
    });

    return CursoEntity.fromObject( deleted );
  }

}