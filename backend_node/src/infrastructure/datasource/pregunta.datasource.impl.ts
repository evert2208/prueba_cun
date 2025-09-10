import { prisma } from '../../data/postgres';
import { CreatePreguntaDto, CustomError, PreguntaDatasource, PreguntaEntity, UpdatePreguntaDto } from '../../domain';




export class PreguntaDatasourceImpl implements PreguntaDatasource {

  async create( createPreguntaDto: CreatePreguntaDto ): Promise<PreguntaEntity> {
    const pregunta = await prisma.pregunta.create({
      data: createPreguntaDto!
    });

    return PreguntaEntity.fromObject( pregunta );
  }

  async getAll(): Promise<PreguntaEntity[]> {
    const preguntas = await prisma.pregunta.findMany();
    return preguntas.map( (pregunta: any) => PreguntaEntity.fromObject(pregunta) );
  }

  async findById( id: number ): Promise<PreguntaEntity> {
    const pregunta = await prisma.pregunta.findFirst({
      where: { id }
    });

    if ( !pregunta ) throw new CustomError(`pregunta with id ${ id } not found`, 404);
    return PreguntaEntity.fromObject(pregunta);
  }

  async updateById( updatePreguntaDto: UpdatePreguntaDto ): Promise<PreguntaEntity> {
    await this.findById( updatePreguntaDto.id );
    
    const updatedPregunta = await prisma.pregunta.update({
      where: { id: updatePreguntaDto.id },
      data: updatePreguntaDto!.values
    });

    return PreguntaEntity.fromObject(updatedPregunta);
  }

  async deleteById( id: number ): Promise<PreguntaEntity> {
    await this.findById( id );
    const deleted = await prisma.pregunta.delete({
      where: { id }
    });

    return PreguntaEntity.fromObject( deleted );
  }

}