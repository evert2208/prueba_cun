/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PreguntasState {
  loadingPreg: boolean;
  preguntas: any[];
  activePreg: any | null;
}

const initialState: PreguntasState = {
  loadingPreg: true,
  preguntas: [],
  activePreg: null,
};

export const preguntasSlice = createSlice({
  name: 'preguntas',
  initialState,
  reducers: {
    onSetActivePregunta: (state, action: PayloadAction<any>) => {
      state.activePreg = action.payload;
    },

    onAddNewPregunta: (state, action: PayloadAction<any>) => {
      state.preguntas.push(action.payload);
      state.activePreg = null;
    },

    onUpdatePregunta: (state, action: PayloadAction<any>) => {
      state.preguntas = state.preguntas.map((event) =>
        event.id === action.payload.id ? action.payload : event
      );
    },

    onDeletePregunta: (state) => {
      if (state.activePreg) {
        state.preguntas = state.preguntas.filter(
          (event) => event.id !== state.activePreg!.id
        );
        state.activePreg = null;
      }
    },

    onLoadPreguntas: (state, action: PayloadAction<any[]>) => {
      state.activePreg = false;
      action.payload.forEach((event) => {
        const exists = state.preguntas.some(
          (dbEvent) => dbEvent.id === event.id
        );
        if (!exists) {
          state.preguntas.push(event);
        }
      });
    },

    onLogoutPreguntas: (state) => {
      state.activePreg = true;
      state.preguntas = [];
      state.activePreg = null;
    },
  },
});

// Exportar actions
export const {
  onSetActivePregunta,
  onAddNewPregunta,
  onUpdatePregunta,
  onDeletePregunta,
  onLoadPreguntas,
  onLogoutPreguntas,
} = preguntasSlice.actions;

// Exportar reducer
export default preguntasSlice.reducer;