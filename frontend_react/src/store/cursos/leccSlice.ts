/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LecState {
  loadingLec: boolean;
  lecciones: any[];
  activeLec: any | null;
}
const initialState: LecState = {
  loadingLec: true,
  lecciones: [],
  activeLec: null,
};

export const lecSlice = createSlice({
  name: 'lecciones',
  initialState,
  reducers: {
    onSetActiveLec: (state, action: PayloadAction<any>) => {
      state.activeLec = action.payload;
    },

    onAddNewLec: (state, action: PayloadAction<any>) => {
      state.lecciones.push(action.payload);
      state.activeLec = null;
    },

    onUpdateLec: (state, action: PayloadAction<any>) => {
      state.lecciones = state.lecciones.map((event) =>
        event.id === action.payload.id ? action.payload : event
      );
    },

    onDeleteLec: (state) => {
      if (state.activeLec) {
        state.lecciones = state.lecciones.filter(
          (event) => event.id !== state.activeLec!.id
        );
        state.activeLec = null;
      }
    },

    onLoadLecs: (state, { payload }) => {
            state.loadingLec = false;
            state.lecciones = payload
        },

    onLogoutLecs: (state) => {
      state.loadingLec = true;
      state.lecciones = [];
      state.activeLec = null;
    },
  },
});

// Exportar actions
export const {
  onSetActiveLec,
  onAddNewLec,
  onUpdateLec,
  onDeleteLec,
  onLoadLecs,
  onLogoutLecs,
} = lecSlice.actions;

// Exportar reducer
export default lecSlice.reducer;