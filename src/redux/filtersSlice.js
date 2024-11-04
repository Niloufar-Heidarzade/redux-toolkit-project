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
        return state.filter((item) => item!==action.payload)
      }
    }
  }
})

export const {add , deleteFilter} = filterSlice.actions;
export default filterSlice.reducer;