import React, { useEffect, useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { SiGooglecalendar } from "react-icons/si";
import { TbCalendarStats } from "react-icons/tb";
import { FcMoneyTransfer } from "react-icons/fc";
import{RiDeleteBin2Fill} from 'react-icons/ri'
import { Link } from "react-router-dom";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux"; 
import { removeaddExpense } from "../../slice/trackSlice";
const Home = () => {
  let dispatch = useDispatch()
  let [expensedata, setExpensedata] = useState([]);
  let [incomedata, setIncomedata] = useState([]);
  let data = useSelector((state) => state.addExpenseInfo);
  let income = useSelector((state) => state.addIncomeInfo);
 console.log(incomedata)
  useEffect(() => {
   setExpensedata(data)
  },[]);
  useEffect(() => {
    setIncomedata(income)
  },[]);
  const deletExpensesInfo =(id)=>{
    // console.log(id);
    dispatch(removeaddExpense(id))
  } 
  return (
    <div className="ml-8">
      <div className="py-12 flex gap-x-16">
        <div className="w-[300px] h-[100px] rounded-lg bg-green-500	 text-white text-center">
          <h2 className="font-medium text-lg pt-6 underline">
            Current Balance
          </h2>
          <p className="font-bold text-lg">300 Tk</p>
        </div>

        <div className="w-[300px] h-[100px] rounded-lg bg-black text-white text-center">
          <h2 className="font-medium text-lg pt-6 underline">
            Added Balance this month
          </h2>
          <p className="font-bold text-lg">400 Tk</p>
        </div>

        <div className="w-[300px] h-[100px] rounded-lg bg-red-600 text-white text-center">
          <h2 className="font-medium text-lg pt-6 underline">Total Cost</h2>
          <p className="font-bold text-lg">200 Tk</p>
        </div>
      </div>

      <div className="flex gap-32">
        <Link to="/daily">
          <div className="w-[450px] h-[70px] rounded-lg bg-black text-white text-center relative">
            <h2 className="font-medium text-lg pt-4">
              Daily Income Expenditure
            </h2>
            <CiCalendarDate className="absolute top-6 left-20 text-lg" />
          </div>
        </Link>

        <Link to="/monthly">
          <div className="w-[450px] h-[70px] rounded-lg bg-green-500 text-white text-center relative">
            <h2 className="font-medium text-lg pt-4">
              Monthly Income Expenditure
            </h2>
            <SiGooglecalendar className="absolute top-6 left-20 text-lg" />
          </div>
        </Link>
      </div>
      {/* <div className="mt-4 flex gap-32">
        <Link to="/Annual">
          <div className="w-[450px] h-[70px] rounded-lg bg-red-600 text-white text-center relative">
            <h2 className="font-medium text-lg pt-4">
              Annual Income Expenditure
            </h2>
            <TbCalendarStats className="absolute top-6 left-20 text-lg" />
          </div>
        </Link>
        <Link to="/payable">
          <div className="w-[450px] h-[70px] rounded-lg bg-purple-600 text-white text-center relative">
            <h2 className="font-medium text-lg pt-4">Accounts Payable</h2>
            <FcMoneyTransfer className="absolute top-6 left-20 text-lg" />
          </div>
        </Link>
      </div> */}
      <div className="mt-4">
        <h1 className="text-lg font-semibold">
          Tow Day Income Expenditure History
        </h1>
        <h2 className="w-full h-1 bg-black"></h2>
      </div>
      <div className="h-[250px] overflow-y-scroll">
       
        {incomedata.map((item)=>{
           <div className="w-full h-[70px] rounded-lg bg-slate-200 mt-2 relative">
           <AiFillPlusCircle className="absolute top-8 left-2 text-sm text-green-500" />
           <div className="flex">
             <div className="ml-10 w-[400px] ">
               <h2 className="font-semibold text-lg pt-2">{item.idescription}</h2>
               <h2 className="font-semibold text-lg ">{item.formattedDate}</h2>
             </div>
             <div className="w-[200px] p-6">
               <h1 className=" font-semibold text-green-500 text-lg">Recive</h1>
             </div>
             <div className="w-[200px] p-6">
               <p className=" font-semibold text-green-500 text-lg">{item.amount}TK</p>
             </div>
             <div className="w-[200px] mt-4 text-end font-semibold text-red-500 text-lg">
                 <button className="bg-black px-2 py-1 rounded-xl">Delete</button>
               </div>
           </div>
         </div>
        })}
        {expensedata.map((item,id) => (
          <div className="w-full h-[70px] rounded-lg bg-slate-200 mt-2 relative">
            <AiFillMinusCircle key={id} className="absolute top-8 left-2 text-sm text-red-500" />
            <div className="flex">
              <div className="ml-10 w-[400px] ">
                <h2 className="font-semibold text-lg pt-2">{item.edescription}</h2>
                <h2 className="font-semibold text-lg ">{item.formattedDate}</h2>
              </div>
              <div className="w-[200px] p-6">
                <h1 className=" font-semibold text-red-500 text-lg">Pay</h1>
              </div>
              <div className="w-[200px] p-6">
                <p  className=" font-semibold text-red-500 text-lg">{item.amount} TK</p>
              </div>
              <div className="w-[200px] mt-6 text-end font-semibold text-red-500 text-lg">
                <button onClick={()=>deletExpensesInfo(id)}>
                  <RiDeleteBin2Fill className="text-2xl mr-2"/>
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Home;
