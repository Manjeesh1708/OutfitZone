import React from 'react'
import { NavLink } from 'react-router-dom'
import {assets} from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen bg-white border-r-2 border-gray-200'>
       <div className='flex flex-col gap-4 pt-6 pl-[20%]'>
            <NavLink  className='flex items-center gap-3 py-2 px-2 rounded hover:bg-gray-100 border border-gray-200' to="/add" >
                <img className='w-5 h-5' src={assets.add_icon} alt="" />
                <p className='hidden md:block'>Add Items</p>
            </NavLink>
            <NavLink  className='flex items-center gap-3 py-2 px-2 rounded hover:bg-gray-100 border border-gray-200' to="/list" >
                <img className='w-5 h-5' src={assets.order_icon} alt="" />
                <p className='hidden md:block'>List Items</p>
            </NavLink>
            <NavLink  className='flex items-center gap-3 py-2 px-2 rounded hover:bg-gray-100 border border-gray-200' to="/orders" >
                <img className='w-5 h-5' src={assets.order_icon} alt="" />
                <p className='hidden md:block'>Orders</p>
            </NavLink>
 
       </div>
    </div>
  )
}

export default Sidebar