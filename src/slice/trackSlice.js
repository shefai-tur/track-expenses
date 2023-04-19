import { createSlice } from "@reduxjs/toolkit";

export const trackSlice = createSlice({
  name: "track",
  // initialState: {
  //   info: localStorage.getItem("addExpenseInfo")
  //     ? JSON.parse(localStorage.getItem("addExpenseInfo"))
  //     : null,  
  //   informattion:[]
  // },
  initialState:[],
  reducers: {
    addExpenseInfo(state, action){
      state.push(action.payload);
    },
    addIncomeInfo(state, action){
      state.push(action.payload);
    },
    removeaddExpense(state,action){
      
      // let ExpenseIndexnum =state.indexOf(action.payload,1)
      //state.splice( ExpenseIndexnum);
      // state.put(action.payload);
      state.splice(action.payload);
      console.log(action.payload)
  
    },
    deleteExpense(state,action){

    }
  },
 
});
export const { addExpenseInfo,addIncomeInfo,removeaddExpense} = trackSlice.actions;

export default trackSlice.reducer;
