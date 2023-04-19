
import React, { useEffect, useState } from "react";
import { GiReceiveMoney } from "react-icons/gi";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addIncomeInfo} from "../slice/trackSlice"
import moment from 'moment';

const AddIncome = () => {
  const date = new Date();
  const formattedDate = moment(date).format('MMMM Do YYYY');
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let [idescription, setIdescription] = useState([]);
  let [amount, setAmount] = useState("");
  

  let handelIdescription = (e) => {
    setIdescription(e.target.value);
  };
  let handelAmount = (e) => {
    setAmount(e.target.value);
  };
  let handelAddIncome = () => {
   const data = {
      idescription, amount,formattedDate,
     id: Date.now(),
   }
   dispatch(addIncomeInfo(data))
   navigate("/"); 
 
  };


  return (
    <div className="w-[500px] h-[400px] bg-slate-300 mx-auto mt-20 rounded-3xl">
      <div className="">
        <GiReceiveMoney className="mx-auto text-[60px] mt-4" />
      </div>
      <div>
        <input
          className="w-[450px] h-12 ml-6 border-2 border-black rounded  mt-4 text-lg font-semibold px-4"
          placeholder="Expense Description"
          type="text"
          onChange={handelIdescription}
        ></input>
      </div>
      <div>
        <input
          className="w-[450px] h-12 ml-6 border-2 border-black rounded  mt-8 text-lg font-semibold px-4"
          placeholder="Ammount Of Money"
          type="number"
          value={amount}
          onChange={handelAmount}
        ></input>
      </div>


      <div className="ml-12 mt-6 ">
        <button
          onClick={handelAddIncome}
          className="px-10 py-2 bg-black rounded text-white text-xl font-semibold"
        >
          + Add Income
        </button>
        <NavLink to="/">
          <button className="px-10 py-2 bg-red-500 ml-10 rounded text-white text-xl font-semibold">
            X Cencel
          </button>
        </NavLink>
      </div>
    </div>
  );
};
export default AddIncome;