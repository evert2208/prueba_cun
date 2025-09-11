import { Routes, Route } from "react-router-dom"
import { CursosRoutes } from "../cursos/routes/CursosRoutes"

export const AppRouter = () => {

  return (
  <Routes>
  <Route path="/*" element={<CursosRoutes/>}/> 
 </Routes>
   
  )
}
