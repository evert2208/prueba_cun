
import '../cursos/css/CursoCard.css';

interface Curso {
  id: number;
  nombre: string;
  descripcion: string;
}

interface Props {
  curso: Curso;
}

export const CursoCard: React.FC<Props> = ({ curso }) => {
  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col">
            

            <div className="card-body">
              <h5 className="card-title">{curso.nombre}</h5>
              <p className="card-text">{curso.descripcion}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
