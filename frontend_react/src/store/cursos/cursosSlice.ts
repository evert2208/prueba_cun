import { createSlice } from '@reduxjs/toolkit';

export const cursosSlice = createSlice({
    name: 'cursos',
    initialState: {
        loadingCursos: true,
        cursos: [] as any[],
        activeCurso: null
    },
    reducers: {
        onSetActiveCurso: (state, { payload }) => {
            state.activeCurso = payload;
        },

        onAddNewCurso: (state, { payload }) => {
            state.cursos.push(payload);
            state.activeCurso = null;
        },

        onUpdateCurso: (state, { payload }) => {
            state.cursos = state.cursos.map(event => {
                if (event.id == payload.id) {
                    return payload;
                }
                return event;
            });
        },

        onDeleteCurso: (state: any) => {
            if (state.activeCurso) {
                state.cursos = state.cursos.filter((event: any) => event.id !== state.activeCurso.id);
                state.activeCurso = null;
            }

        },

        onLoadCursos: (state, { payload }) => {
            state.loadingCursos = false;
            state.cursos = payload
        },

        onLogoutCursos: (state) => {
            state.loadingCursos = true,
                state.cursos = [],
                state.activeCurso = null
        }
    }
});


// Action creators are generated for each case reducer function
export const {
    onSetActiveCurso,
    onAddNewCurso,
    onUpdateCurso,
    onDeleteCurso,
    onLoadCursos,
    onLogoutCursos
} = cursosSlice.actions;