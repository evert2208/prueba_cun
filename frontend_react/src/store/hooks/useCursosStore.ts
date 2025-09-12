/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewCurso,
  onDeleteCurso,
  onLoadCursos,
  onSetActiveCurso,
  onUpdateCurso,
} from "../cursos/cursosSlice";
import { cursosApi } from "../../api";
import Swal from "sweetalert2";

export const useCursosStore = () => {
  const dispatch = useDispatch();
  const  { cursos, activeCurso } =  useSelector((state: any) => state.cursos);

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
        dispatch(onAddNewCurso({ ...cursoEvent, id: data.id}));
        startLoadingCursos();
        Swal.fire("Agregado!", "Se ha agregado el registro", "success");
      }
    } catch (error: any) {
      Swal.fire("Error al guardar", error.response?.data?.msg || "Error", "error");
    }
  };

  const startDeleteCurso = async (curso: any) => {
   const cursoId= curso.id;
   Swal.fire({
    title: "¿Estás seguro?",
    text: "Se eliminará el registro por completo",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí",
    cancelButtonText: "Cancelar"
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await cursosApi.delete(`/cursos/${cursoId}`);
        dispatch(onDeleteCurso());

        Swal.fire("Eliminado!", "Se ha eliminado el registro", "success");
      } catch (error) {
        
        Swal.fire("Error al eliminar", "Comuníquese con el Admin", "error");
      }
    }
  });
  };

  const startLoadingCursos = async () => {
    try {
      const data  = await cursosApi.get("/cursos");
      dispatch(onLoadCursos(data.data));
    } catch (error:any) {
      Swal.fire("Error al cargar los datos", error.response?.data?.msg || "Error", "error");
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
