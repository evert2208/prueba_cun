import { configureStore } from '@reduxjs/toolkit'
import { cursosSlice } from './cursos/cursosSlice'
import { lecSlice } from './cursos/estSlice'
import { preguntasSlice } from './cursos/preguntasSlice'




export const store = configureStore({
    reducer: {
       
        cursos: cursosSlice.reducer,
        lecciones: lecSlice.reducer,
        preguntas: preguntasSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})