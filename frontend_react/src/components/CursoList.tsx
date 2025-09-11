import { getCursos } from "../cursos/helpers/getCursos";
import { CursoCard } from "./CursoCard";

export const CursoList = () => {
  const cursos = getCursos();
  return (
    <div className="row">
      {cursos.map((curso: any) => (
        <CursoCard key={curso.id} curso={curso} />
      ))}
    </div>
  );
};

