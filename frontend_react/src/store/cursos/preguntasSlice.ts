import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PreguntasState {
  loadinginscrip: boolean;
  preguntas: any[];
  activeinscrip: any | null;
}

const initialState: PreguntasState = {
  loadinginscrip: true,
  preguntas: [],
  activeinscrip: null,
};

export const preguntasSlice = createSlice({
  name: 'preguntas',
  initialState,
  reducers: {
    onSetActiveInscripcion: (state, action: PayloadAction<any>) => {
      state.activeinscrip = action.payload;
    },

    onAddNewInscripcion: (state, action: PayloadAction<any>) => {
      state.preguntas.push(action.payload);
      state.activeinscrip = null;
    },

    onUpdateInscripcion: (state, action: PayloadAction<any>) => {
      state.preguntas = state.preguntas.map((event) =>
        event.id === action.payload.id ? action.payload : event
      );
    },

    onDeleteInscripcion: (state) => {
      if (state.activeinscrip) {
        state.preguntas = state.preguntas.filter(
          (event) => event.id !== state.activeinscrip!.id
        );
        state.activeinscrip = null;
      }
    },

    onLoadinscripciones: (state, action: PayloadAction<any[]>) => {
      state.loadinginscrip = false;
      action.payload.forEach((event) => {
        const exists = state.preguntas.some(
          (dbEvent) => dbEvent.id === event.id
        );
        if (!exists) {
          state.preguntas.push(event);
        }
      });
    },

    onLogoutinscripciones: (state) => {
      state.loadinginscrip = true;
      state.preguntas = [];
      state.activeinscrip = null;
    },
  },
});

// Exportar actions
export const {
  onSetActiveInscripcion,
  onAddNewInscripcion,
  onUpdateInscripcion,
  onDeleteInscripcion,
  onLoadinscripciones,
  onLogoutinscripciones,
} = preguntasSlice.actions;

// Exportar reducer
export default preguntasSlice.reducer;