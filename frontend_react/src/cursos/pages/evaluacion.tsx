/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from 'react';
import { CursosLayout } from "../layout/CursosLayout"
import { useCursosStore, useLeccionesStore } from '../../store/hooks';
import { useForm } from '../../hooks';
import { useEvaluacionStore } from '../../store/hooks/useEvaluacionStore';




export const Evaluacion = () => {
  const {startLoadingCursos, cursos}= useCursosStore();
  const {lecciones, startLoadingLec} = useLeccionesStore();
  const {preguntas,startLoadingEva}= useEvaluacionStore();

 
  const { activeLec, startSavingLec} = useLeccionesStore();
    const [formSubmit, setformSubmit] = useState(false)

    const [formValues, setformValues] = useState({
      leccionId:0,
      cursoId: 0
      
    });

    const { onResetForm } = useForm(formValues);

    const titleClass = useMemo(() => {

      if(!formSubmit) return '';

      // return (formValues.nombre.length>0)?'':'is-invalid';

    }, [ formSubmit])


    useEffect(() => {
      if(activeLec !=null){
        setformValues({...activeLec});
      }
    
    }, [activeLec])
    

    const onInputChange = ({target}:any)=> {
      console.log(target.value)
      setformValues({
        ...formValues,
        [target.name]: target.value
      })
    }

    const selectChange= async (event: any)=> {
      
      startLoadingLec(Number(event.target.value));
    }


    const onSubmit = async(event:any)=> {
      event.preventDefault();
      setformSubmit(true);
      formValues.leccionId= Number(formValues.leccionId);
      // if(formValues.nombre.length<=0) return;
      
      await startLoadingEva(formValues.leccionId);
      setformSubmit(false);
      onResetForm()
    
    }
 
  // const onSelect = (event:any)=> {
  //   setActiveEva(event);
  // }

  // const onDelete = (curso: any)=> {
  //   startDeleteLec(curso);
  // }

  useEffect(() => {
    startLoadingCursos();
   
  }, [])
  
  return (
    <CursosLayout>
    
<div className="row">
      <div className="col pb-5">

<h1>EVALUACIONES</h1>
</div>
      </div>
      <div className="container">
        
              <form className="container row" onSubmit={onSubmit}>
   <div className=" col">
     <label>Curso</label>
     <select
        id="selectExample"
        className="form-select"
        onChange={(event)=>{onInputChange(event);selectChange(event)}}
         name='cursoId'
         value={formValues.cursoId}
      >
        <option value="">-- Selecciona --</option>
        {cursos.map((curso: any) => (
          <option key={curso.id} value={curso.id}>
            {curso.nombre}
          </option>
        ))}
      </select>

  <div className="col">
    <label>Lección</label>
     {/* <input 
         type="text" 
         className={ `form-control ${titleClass}`}
         placeholder="Nombre del curso"
         name="nombre"
         autoComplete="off"
         value={formValues.nombre}
         onChange={onInputChange}
     /> */}
      <select
        id="selectExample"
        className="form-select"
        value={formValues.leccionId}
        onChange={(event)=>{onInputChange(event)}}
        name='leccionId'
        disabled={lecciones.length===0}
      >
        <option value="">-- Selecciona --</option>
        {lecciones.map((curso: any) => (
          <option key={curso.id} value={curso.id}>
            {curso.nombre}
          </option>
        ))}
      </select>
 </div>
 
     <br />

    
 </div> 
 <div className="col-3">
 <button
       type="submit"
       className="btn btn-outline-primary"
   >
       <i className="far fa-save"></i>
       <span>Buscar</span>
   </button>

 </div>
 
   
</form>
              
        <div className="row">
          <div className="col">
            <div className="card">
            {
                preguntas.map((preg: any) => (
                  <div key={preg.id}>
                    <h6>{preg.enunciado}</h6>
                    {preg.opciones.map((op: any, i: number) => (
                      <div key={i} className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name={`pregunta-${preg.id}`}
                          id={`opcion-${preg.id}-${i}`}
                          value={op}
                        />
                        <label className="form-check-label" htmlFor={`opcion-${preg.id}-${i}`}>
                          {op}
                        </label>
                      </div>
                    ))}
                  </div>
                ))
              }
       
            </div>
          </div>
        </div>
      </div>
    </CursosLayout>
  )
}
