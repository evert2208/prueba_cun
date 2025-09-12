/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import {
  onSetActiveLec,
  onAddNewLec,
  onUpdateLec,
  onDeleteLec,
  onLoadLecs,
} from "../cursos/leccSlice";
import { cursosApi } from "../../api";
import Swal from "sweetalert2";

export const useLeccionesStore = () => {
  const dispatch = useDispatch();
  const  { lecciones, activeLec } =  useSelector((state: any) => state.lecciones);

  const setActiveLec = (cursoEvent: any) => {
    dispatch(onSetActiveLec(cursoEvent));
  };

  const startSavingLec = async (cursoEvent: any) => {
    try {
      if (cursoEvent.id) {
        // actualizar
        await cursosApi.put(`/lecciones/${cursoEvent.id}`, cursoEvent);
        dispatch(onUpdateLec({ ...cursoEvent}));
      } else {
        // crear
        const { data } = await cursosApi.post("/lecciones", cursoEvent);
        dispatch(onAddNewLec({ ...cursoEvent, id: data.id}));
        startLoadingLec(data.cursoId);
        Swal.fire("Agregado!", "Se ha agregado el registro", "success");
      }
    } catch (error: any) {
      Swal.fire("Error al guardar", error.response?.data?.msg || "Error", "error");
    }
  };

  const startDeleteLec = async (curso: any) => {
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
        await cursosApi.delete(`/lecciones/${cursoId}`);
        dispatch(onDeleteLec());

        Swal.fire("Eliminado!", "Se ha eliminado el registro", "success");
      } catch (error) {
        
        Swal.fire("Error al eliminar", "Comuníquese con el Admin", "error");
      }
    }
  });
  };

  const startLoadingLec = async (id: number) => {
    
    if(!id) return;
    try {
      const data  = await cursosApi.get(`/cursos/${id}/lecciones`);
      dispatch(onLoadLecs(data.data));
    } catch (error:any) {
       Swal.fire("Error al cargar los datos", error.response?.data?.msg || "Error", "error");
    }
  };

  return {
    eventSelected: !!activeLec,
    lecciones,
    activeLec,

    // métodos
    setActiveLec,
    startSavingLec,
    startDeleteLec,
    startLoadingLec,
  };
};
