import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
export default function Layout({logOut}) {
  
  return (
    <div>
          <Navbar logOut={logOut} />
         <Outlet>         
         </Outlet>
    </div>
  )
}
