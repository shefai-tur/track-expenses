import { configureStore } from '@reduxjs/toolkit'
import trackSlice from './slice/trackSlice'
export default configureStore({
   reducer:{
      addExpenseInfo:trackSlice,
      addIncomeInfo:trackSlice
   },
})