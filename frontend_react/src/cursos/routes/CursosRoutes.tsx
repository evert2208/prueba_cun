import { Routes, Route, Navigate } from "react-router-dom"
import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components"
import { Inicio, Cursos } from "../pages"
import { Evaluacion } from "../pages/evaluacion"



export const CursosRoutes = () => {
  
  return (
    <>
     <Navbar/>
     <div>
     <Routes>
    <Route path="/inicio" element={<Inicio/>}/>
      <Route path="/cursos" element={<Cursos/>}/>
      <Route path="/evaluacion" element={<Evaluacion/>}/>
    <Route path="/*" element={<Navigate to="/inicio"/>}/>
   </Routes>
     </div>
   <Footer/>
     
    
   </>
   
  )
}
