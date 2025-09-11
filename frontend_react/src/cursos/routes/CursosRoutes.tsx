import { Routes, Route, Navigate } from "react-router-dom"
import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components"
import { Cursos } from "../pages/Cursos"


export const CursosRoutes = () => {
 
  

  return (
    <>
     <Navbar/>
     <div>
     <Routes>
    <Route path="/inicio" element={<Cursos/>}/>
    
    {
      
      <Route path="/cursos" element={<Cursos/>}/>
      
      
    }
    
    <Route path="/*" element={<Navigate to="/inicio"/>}/>
   </Routes>
     </div>
   <Footer/>
     
    
   </>
   
  )
}
