/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from 'react';
import { CursosLayout } from "../layout/CursosLayout"
import { useCursosStore } from "../../store/hooks"


export const Inicio = () => {
  const {cursos, setActiveCurso, startLoadingCursos, startDeleteCurso} = useCursosStore();
  
 
  const { activeCurso, startSavingCurso} = useCursosStore();
    const [formSubmit, setformSubmit] = useState(false)

    const [formValues, setformValues] = useState({
      nombre: '',
      descripcion: '',
      
    });


    const titleClass = useMemo(() => {

      if(!formSubmit) return '';

      return (formValues.nombre.length>0)?'':'is-invalid';

    }, [formValues.nombre, formSubmit])


    useEffect(() => {
      if(activeCurso !=null){
        setformValues({...activeCurso});
      }
    
    }, [activeCurso])
    

    const onInputChange = ({target}:any)=> {
      setformValues({
        ...formValues,
        [target.name]: target.value
      })
    }



  

    const onSubmit = async(event:any)=> {
      event.preventDefault();
      setformSubmit(true);

      if(formValues.nombre.length<=0) return;

      await startSavingCurso(formValues);
      // closeModal();
      setformSubmit(false);
    
    }
 
  const onSelect = (event:any)=> {
    setActiveCurso(event);
  }

  const onDelete = (curso: any)=> {
    startDeleteCurso(curso);
  }

  
  useEffect(() => {
    startLoadingCursos();

  }, [])
  
  return (
    <CursosLayout>
    
<div className="row">
      <div className="col pb-5">

<h1>CURSOS DISPONIBLES</h1>
</div>
      </div>
      <div className="container">
        
              <form className="container row" onSubmit={onSubmit}>
  
  <div className="col">
    <label>Nombre</label>
     <input 
         type="text" 
         className={ `form-control ${titleClass}`}
         placeholder="Nombre del curso"
         name="nombre"
         autoComplete="off"
         value={formValues.nombre}
         onChange={onInputChange}
     />
 </div>
 
 <div className=" col">
     <label>Descripcion</label>
     <input 
         type="text" 
         className={ `form-control`}
         placeholder="Descripcion"
         name="descripcion"
         autoComplete="off"
         value={formValues.descripcion}
         onChange={onInputChange}
     />
     <br />

    
 </div> 
 <div className="col-3">
 <button
       type="submit"
       className="btn btn-outline-primary"
   >
       <i className="far fa-save"></i>
       <span>Agregar Curso</span>
   </button>

 </div>
 
   
</form>
              
        <div className="row">
          <div className="col">
            <div className="card">
             
            <table className="table table-responsive">
      <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Descripcion</th>
      <th scope="col">Accion</th>
    </tr>
  </thead>
  <tbody>

    {
      cursos.map((curso: any) => (
        <tr key={curso.id}>
        <th scope="row">{curso.nombre}</th>
        <td>{curso.descripcion}</td>
        <td><a id="accion" onClick={()=>{}}><i className="bi bi-pencil-square"></i></a>
        <a id="accion" onClick={()=>{onSelect(curso); onDelete(curso)}}><i className="bi bi-trash3-fill"></i></a></td>
      </tr>
      ))
    }
  
  
  </tbody>
</table>
       
            </div>
          </div>
        </div>
      </div>
    </CursosLayout>
  )
}
