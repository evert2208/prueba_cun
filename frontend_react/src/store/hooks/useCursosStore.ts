import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewCurso,
  onDeleteCurso,
  onLoadCursos,
  onSetActiveCurso,
  onUpdateCurso,
} from "../cursos/cursosSlice";
import { cursosApi } from "../../api";
// import Swal from "sweetalert2";

export const useCursosStore = () => {
  const dispatch = useDispatch();
  const { cursos, activeCurso } = useSelector((state: any) => state.cursos);
  // const { user } = useSelector((state: any) => state.auth);

  const setActiveCurso = (cursoEvent: any) => {
    dispatch(onSetActiveCurso(cursoEvent));
  };

  const startSavingCurso = async (cursoEvent: any) => {
    try {
      if (cursoEvent.id) {
        // actualizar
        await cursosApi.put(`/cursos/${cursoEvent.id}`, cursoEvent);
        dispatch(onUpdateCurso({ ...cursoEvent}));
      } else {
        // crear
        const { data } = await cursosApi.post("/cursos", cursoEvent);
        dispatch(onAddNewCurso({ ...cursoEvent, id: data.curso.id}));
        // Swal.fire("Agregado!", "Se ha agregado el registro", "success");
      }
    } catch (error: any) {
    //   Swal.fire("Error al guardar", error.response?.data?.msg || "Error", "error");
    }
  };

  const startDeleteCurso = async () => {
    try {
      await cursosApi.delete(`/cursos/${activeCurso.id}`);
      dispatch(onDeleteCurso());
    //   Swal.fire("Eliminado!", "Se ha eliminado el registro", "success");
    } catch (error) {
      console.log(error);
    //   Swal.fire("Error al eliminar", "Comuníquese con el Admin", "error");
    }
  };

  const startLoadingCursos = async () => {
    try {
      const data  = await cursosApi.get("/cursos");
      dispatch(onLoadCursos(data.data));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    eventSelected: !!activeCurso,
    cursos,
    activeCurso,

    // métodos
    setActiveCurso,
    startSavingCurso,
    startDeleteCurso,
    startLoadingCursos,
  };
};
