"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursoDatasourceImpl = void 0;
const postgres_1 = require("../../data/postgres");
const domain_1 = require("../../domain");
class CursoDatasourceImpl {
    async create(createCursoDto) {
        const curso = await postgres_1.prisma.curso.create({
            data: createCursoDto
        });
        return domain_1.CursoEntity.fromObject(curso);
    }
    async getAll() {
        const cursos = await postgres_1.prisma.curso.findMany();
        return cursos.map((curso) => domain_1.CursoEntity.fromObject(curso));
    }
    async findById(id) {
        const curso = await postgres_1.prisma.curso.findFirst({
            where: { id }
        });
        if (!curso)
            throw new domain_1.CustomError(`Curso with id ${id} not found`, 404);
        return domain_1.CursoEntity.fromObject(curso);
    }
    async updateById(updateCursoDto) {
        await this.findById(updateCursoDto.id);
        const updatedCurso = await postgres_1.prisma.curso.update({
            where: { id: updateCursoDto.id },
            data: updateCursoDto.values
        });
        return domain_1.CursoEntity.fromObject(updatedCurso);
    }
    async deleteById(id) {
        await this.findById(id);
        const deleted = await postgres_1.prisma.curso.delete({
            where: { id }
        });
        return domain_1.CursoEntity.fromObject(deleted);
    }
}
exports.CursoDatasourceImpl = CursoDatasourceImpl;
//# sourceMappingURL=curso.datasource.impl.js.map