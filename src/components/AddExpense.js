import React, { useEffect, useState } from "react";
import { GiPayMoney } from "react-icons/gi";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addExpenseInfo } from "../slice/trackSlice";
import moment from 'moment';

const AddExpense = () => {
  const date = new Date();
  const formattedDate = moment(date).format('MMMM Do YYYY');
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let [edescription, setEdescription] = useState([]);
  let [amount, setAmount] = useState("");
  

  let handelEdescription = (e) => {
    setEdescription(e.target.value);
  };
  let handelAmount = (e) => {
    setAmount(e.target.value);
  };
  let handelAddExpense = () => {
   const data = {
      edescription, amount,formattedDate,
     id: Date.now(),
   }
   dispatch(addExpenseInfo(data))
   navigate("/"); 
 
  };


  return (
    <div className="w-[500px] h-[400px] bg-slate-300 mx-auto mt-20 rounded-3xl">
      <div className="">
        <GiPayMoney className="mx-auto text-[60px] mt-4" />
      </div>
      <div>
        <input
          className="w-[450px] h-12 ml-6 border-2 border-black rounded  mt-4 text-lg font-semibold px-4"
          placeholder="Expense Description"
          type="text"
          onChange={handelEdescription}
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
          onClick={handelAddExpense}
          className="px-10 py-2 bg-black rounded text-white text-xl font-semibold"
        >
          + Add Expense
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

export default AddExpense;

