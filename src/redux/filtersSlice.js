import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: [],
  reducers: {
    add: (state , action) => {
      if(!state.some(item => item===action.payload)){
        state.push(action.payload);
      }
    },
    deleteFilter: (state , action) => {
      if(state.some(item => item===action.payload)){
        return state.filter((item) => item!==action.payload);
      }
    },
    removeAll: (state , action) => {
      return [];
    }
  }
})

export const {add , deleteFilter , removeAll} = filterSlice.actions;
export default filterSlice.reducer;