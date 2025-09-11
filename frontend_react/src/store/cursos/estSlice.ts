import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LecState {
  loadingEst: boolean;
  lecciones: any[];
  activeEst: any | null;
}
const initialState: LecState = {
  loadingEst: true,
  lecciones: [],
  activeEst: null,
};

export const lecSlice = createSlice({
  name: 'lecciones',
  initialState,
  reducers: {
    onSetActiveEst: (state, action: PayloadAction<any>) => {
      state.activeEst = action.payload;
    },

    onAddNewEst: (state, action: PayloadAction<any>) => {
      state.lecciones.push(action.payload);
      state.activeEst = null;
    },

    onUpdateEst: (state, action: PayloadAction<any>) => {
      state.lecciones = state.lecciones.map((event) =>
        event.id === action.payload.id ? action.payload : event
      );
    },

    onDeleteEst: (state) => {
      if (state.activeEst) {
        state.lecciones = state.lecciones.filter(
          (event) => event.id !== state.activeEst!.id
        );
        state.activeEst = null;
      }
    },

    onLoadEsts: (state, action: PayloadAction<any[]>) => {
      state.loadingEst = false;
      action.payload.forEach((event) => {
        const exists = state.lecciones.some(
          (dbEvent) => dbEvent.id === event.id
        );
        if (!exists) {
          state.lecciones.push(event);
        }
      });
    },

    onLogoutEsts: (state) => {
      state.loadingEst = true;
      state.lecciones = [];
      state.activeEst = null;
    },
  },
});

// Exportar actions
export const {
  onSetActiveEst,
  onAddNewEst,
  onUpdateEst,
  onDeleteEst,
  onLoadEsts,
  onLogoutEsts,
} = lecSlice.actions;

// Exportar reducer
export default lecSlice.reducer;