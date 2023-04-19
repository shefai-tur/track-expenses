import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider,createRoutesFromElements,Route} from "react-router-dom";
import Started from "./Pages/Started";
import Sidbar from "./components/Sidbar";
import DailyIE from "./components/DailyIE";
import RootLyout from "./components/RootLyout";
import MonthlyIE from "./components/MonthlyIE";
import AnnualIE from "./components/AnnualIE";
import AcountsPayable from "./components/AcountsPayable";
import AddExpense from "./components/AddExpense";
import AddIncome from "./components/AddIncome";
import AllExpenselist from "./components/AllExpenselist";
import AllIncomelist from "./components/AllIncomelist";
import About from "./components/About";



const router = createBrowserRouter(createRoutesFromElements(

<Route path="/" element={<RootLyout/>}>
  <Route index element={<Home/>}></Route>
  <Route path="/daily" element={<DailyIE/>}></Route>
  <Route path="/monthly" element={<MonthlyIE/>}></Route>
  <Route path="/addExpense" element={<AddExpense/>}></Route>
  <Route path="/addIncome" element={<AddIncome/>}></Route>
  <Route path="/allExpenselist" element={<AllExpenselist/>}></Route>
  <Route path="/allIncomelist" element={<AllIncomelist/>}></Route>
  <Route path="/about" element={<About/>}></Route>
</Route>


))

function App() {
  return (
   <>
    <RouterProvider router={router}/>
     {/* <Started/> */}
    {/* <Home/> */}
   </>
  );
}

export default App;
 