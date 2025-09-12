/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import {
 onSetActivePregunta,
  onAddNewPregunta,
  onUpdatePregunta,
  onDeletePregunta,
  onLoadPreguntas
} from "../cursos/preguntasSlice";
import { cursosApi } from "../../api";
import Swal from "sweetalert2";

export const useEvaluacionStore = () => {
  const dispatch = useDispatch();
  const  { preguntas, activeEva } =  useSelector((state: any) => state.preguntas);

  const setActiveEva = (cursoEvent: any) => {
    dispatch(onSetActivePregunta(cursoEvent));
  };

  const startSavingEva = async (cursoEvent: any) => {
    try {
      if (cursoEvent.id) {
        // actualizar
        await cursosApi.put(`/preguntas/${cursoEvent.id}`, cursoEvent);
        dispatch(onUpdatePregunta({ ...cursoEvent}));
      } else {
        // crear
        const { data } = await cursosApi.post("/preguntas", cursoEvent);
        dispatch(onAddNewPregunta({ ...cursoEvent, id: data.id}));
        startLoadingEva(data.cursoId);
        Swal.fire("Agregado!", "Se ha agregado el registro", "success");
      }
    } catch (error: any) {
      Swal.fire("Error al guardar", error.response?.data?.msg || "Error", "error");
    }
  };

  const startDeleteEva = async (curso: any) => {
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
        await cursosApi.delete(`/preguntas/${cursoId}`);
        dispatch(onDeletePregunta());

        Swal.fire("Eliminado!", "Se ha eliminado el registro", "success");
      } catch (error) {
        
        Swal.fire("Error al eliminar", "Comuníquese con el Admin", "error");
      }
    }
  });
  };

  const startLoadingEva = async (id: number) => {
    
    if(!id) return;
    try {
      const data  = await cursosApi.get(`/lecciones/${id}/preguntas`);
      console.log(data);
      dispatch(onLoadPreguntas(data.data));
    } catch (error:any) {
       Swal.fire("Error al cargar los datos", error.response?.data?.msg || "Error", "error");
    }
  };

  return {
    eventSelected: !!activeEva,
    preguntas,
    activeEva,

    // métodos
    setActiveEva,
    startSavingEva,
    startDeleteEva,
    startLoadingEva,
  };
};
