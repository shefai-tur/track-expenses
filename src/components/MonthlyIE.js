import React from 'react'
import { BsArrowLeftCircle } from "react-icons/bs";
import { FcCalendar } from "react-icons/fc";
import { FaFileDownload } from "react-icons/fa";
import { AiFillPlusCircle,AiFillMinusCircle } from "react-icons/ai";
import { GiReceiveMoney, GiPayMoney, GiTakeMyMoney } from "react-icons/gi";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { NavLink } from 'react-router-dom';
const MonthlyIE = () => {
  const value = 0.20;
  return (
    <div className="w-[1088px]">
    <div className="relative text-white bg-black rounded py-4">
      <NavLink to="/"><BsArrowLeftCircle className="absolute top-[20px] left-[25px] text-xl hover:text-red-500" /></NavLink>
      
      <div className="flex  gap-x-20 ">
        <div className="text-xl w-[300px] ml-20 font-semibold ">
          Monthly Income Expense
        </div>
        <div className="w-[300px] ml-8 relative">
          <h1 className=" font-semibold text-xl">15/4/2023</h1>
          <FcCalendar className="absolute top-[4px] left-[-25px] text-xl" />
        </div>
        <div className="w-[300px] ml-8 relative">
          <h1 className=" font-semibold text-xl"> Export FDF Report</h1>
          <FaFileDownload className="absolute top-[4px] left-[-25px] text-xl" />
        </div>
      </div>
    </div>
    <div className="mt-10 ml-8 flex ">
      <div className="w-[150px] h-[150px]">
        <CircularProgressbar
          value={value}
          maxValue={1}
          text={`${value * 100}%`}
          styles={buildStyles({
            pathColor: `green`,
            textColor: "black",
            trailColor: "red",
          })}
        />
      </div>
      <div className="flex gap-x-8 ml-14 mt-8">
        <div className="w-[250px] h-[70px] rounded-lg bg-green-600 text-white text-center relative">
          <h2 className="font-semibold text-lg pt-2">Total Receive Money</h2>
          <p className="font-semibold text-lg">500 Tk</p>
          <GiReceiveMoney className="absolute top-6 left-6 text-3xl " />
        </div>
        <div className="w-[250px] h-[70px] rounded-lg bg-red-600 text-white text-center relative">
          <h2 className="font-semibold text-lg pt-2">Total Pay Money</h2>
          <h2 className="font-semibold text-lg">300 Tk</h2>
          <GiPayMoney className="absolute top-6 left-6 text-3xl" />
        </div>
        <div className="w-[250px] h-[70px] rounded-lg bg-yellow-700 text-white text-center relative">
          <h2 className="font-semibold text-lg pt-2">Balance</h2>
          <h2 className="font-semibold text-lg ">200 Tk</h2>
          <GiTakeMyMoney className="absolute top-6 left-10 text-3xl" />
        </div>
      </div>
    </div>
    <div className="mt-6">
      <h1 className="text-lg font-semibold">
        History Of Monthly income Expenditure
      </h1>
      <h2 className="w-full h-1 bg-black"></h2>
    </div>
    <div className="h-[300px] overflow-y-scroll">
      <div className="w-full h-[70px] rounded-lg bg-slate-200 mt-2 relative">
        <AiFillPlusCircle className="absolute top-8 left-2 text-sm text-green-500" />
        <div className="flex">
          <div className="ml-10 w-[400px] ">
            <h2 className="font-semibold text-lg pt-2">Detailes</h2>
            <h2 className="font-semibold text-lg ">16/4/2023 Tk</h2>
          </div>
          <div className="w-[200px] p-6">
            <h1 className=" font-semibold text-green-500 text-lg">Recive</h1>
          </div>
          <div className="w-[200px] p-6">
            <p className=" font-semibold text-green-500 text-lg">300 TK</p>
          </div>
          <div className="w-[200px] p-2.5 text-end font-semibold text-red-500 text-lg">
            <h2>Edite</h2>
            <h2>Delete</h2>
          </div>
        </div>
      </div>
      
      <div className="w-full h-[70px] rounded-lg bg-slate-200 mt-2 relative">
        <AiFillMinusCircle className="absolute top-8 left-2 text-sm text-red-500" />
        <div className="flex">
          <div className="ml-10 w-[400px] ">
            <h2 className="font-semibold text-lg pt-2">Detailes</h2>
            <h2 className="font-semibold text-lg ">16/4/2023 Tk</h2>
          </div>
          <div className="w-[200px] p-6">
            <h1 className=" font-semibold text-red-500 text-lg">Pay</h1>
          </div>
          <div className="w-[200px] p-6">
            <p className=" font-semibold text-red-500 text-lg">300 TK</p>
          </div>
          <div className="w-[200px] p-2.5 text-end font-semibold text-red-500 text-lg">
            <h2>Edite</h2>
            <h2>Delete</h2>
          </div>
        </div>
      </div>

      <div className="w-full h-[70px] rounded-lg bg-slate-200 mt-2 relative">
        <AiFillMinusCircle className="absolute top-8 left-2 text-sm text-red-500" />
        <div className="flex">
          <div className="ml-10 w-[400px] ">
            <h2 className="font-semibold text-lg pt-2">Detailes</h2>
            <h2 className="font-semibold text-lg ">16/4/2023 Tk</h2>
          </div>
          <div className="w-[200px] p-6">
            <h1 className=" font-semibold text-red-500 text-lg">Pay</h1>
          </div>
          <div className="w-[200px] p-6">
            <p className=" font-semibold text-red-500 text-lg">300 TK</p>
          </div>
          <div className="w-[200px] p-2.5 text-end font-semibold text-red-500 text-lg">
            <h2>Edite</h2>
            <h2>Delete</h2>
          </div>
        </div>
      </div>

      <div className="w-full h-[70px] rounded-lg bg-slate-200 mt-2 relative">
        <AiFillMinusCircle className="absolute top-8 left-2 text-sm text-red-500" />
        <div className="flex">
          <div className="ml-10 w-[400px] ">
            <h2 className="font-semibold text-lg pt-2">Detailes</h2>
            <h2 className="font-semibold text-lg ">16/4/2023 Tk</h2>
          </div>
          <div className="w-[200px] p-6">
            <h1 className=" font-semibold text-red-500 text-lg">Pay</h1>
          </div>
          <div className="w-[200px] p-6">
            <p className=" font-semibold text-red-500 text-lg">300 TK</p>
          </div>
          <div className="w-[200px] p-2.5 text-end font-semibold text-red-500 text-lg">
            <h2>Edite</h2>
            <h2>Delete</h2>
          </div>
        </div>
      </div>
      <div className="w-full h-[70px] rounded-lg bg-slate-200 mt-2 relative">
        <AiFillPlusCircle className="absolute top-8 left-2 text-sm text-green-500" />
        <div className="flex">
          <div className="ml-10 w-[400px] ">
            <h2 className="font-semibold text-lg pt-2">Detailes</h2>
            <h2 className="font-semibold text-lg ">16/4/2023 Tk</h2>
          </div>
          <div className="w-[200px] p-6">
            <h1 className=" font-semibold text-green-500 text-lg">Recive</h1>
          </div>
          <div className="w-[200px] p-6">
            <p className=" font-semibold text-green-500 text-lg">300 TK</p>
          </div>
          <div className="w-[200px] p-2.5 text-end font-semibold text-red-500 text-lg">
            <h2>Edite</h2>
            <h2>Delete</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MonthlyIE