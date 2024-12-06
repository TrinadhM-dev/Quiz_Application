import { createSlice } from "@reduxjs/toolkit";

/** create Reducer */
export const questionReducer = createSlice({
  name: 'questions',
  initialState: { // Ensure initialState has the correct structure
    queue: [], // Ensure queue is initialized as an empty array
    answers: [],
    trace: 0,
    
  },
  reducers: {
    startExamAction: (state, action) => {
      return{
        ...state,
        queue:action.payload
      }
    },
    moveNextAction :(state) =>{
      return{
        ...state,
        trace:state.trace+1 
      }
    },
    movePrevAction :(state) =>{
      return{
        ...state,
        trace:state.trace-1 
      }
    }
  }
});

export const { startExamAction,moveNextAction,movePrevAction } = questionReducer.actions;

export default questionReducer.reducer;
