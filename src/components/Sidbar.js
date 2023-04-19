import React from 'react'
  import {AiOutlineHome}from'react-icons/ai'
  import {MdCalendarMonth}from'react-icons/md'
  import {FcAbout}from'react-icons/fc'
  import {GiPayMoney,GiReceiveMoney,GiTakeMyMoney}from'react-icons/gi'
import { NavLink } from 'react-router-dom'
const Sidbar = () => {
  return (
    <div className='h-screen w-[192px]'>
        <h1 className='text-3xl font-bold py-12 pl-6'>Daily Cost</h1>
       <ul >
       <NavLink to="/">
       <li className='text-lg pl-16 relative'>Home
        <AiOutlineHome className='absolute top-1.5 left-8'/></li>
       </NavLink>
       

       <NavLink to="/addExpense">
       <li className='text-lg pt-8 pl-16 relative'>Add Expense
        <GiPayMoney className='absolute top-10 left-8'/></li>
       </NavLink>
        <NavLink to="/addIncome">
        <li className='text-lg pt-8 pl-16 relative'>Add Income
        <GiReceiveMoney className='absolute top-10 left-8'/></li>
        </NavLink>
        <NavLink to="/allExpenselist">
        <li className='text-lg pt-8 pl-16 relative'>All Expense List
        <GiTakeMyMoney className='absolute top-10 left-8'/></li>
        </NavLink>
        <NavLink to="/allIncomelist">
        <li className='text-lg pt-8 pl-16 relative'>All Income List 
        <GiTakeMyMoney className='absolute top-10 left-8'/></li>
        </NavLink>
        <NavLink to="/monthly">
        <li className='text-lg pt-8 pl-16 relative'>Monthly View 
        <MdCalendarMonth className='absolute top-10 left-8'/></li>
        </NavLink>
        <NavLink to="/about">
        <li className='text-lg pt-12 pl-16 relative'>About
        <FcAbout className='absolute top-14 left-8'/></li>
        </NavLink>
       
       
       
        
       
       </ul>
    </div>
  )
}

export default Sidbar