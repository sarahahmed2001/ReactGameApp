
import logo from'../../assets/img1.png'
import React, { useContext, useEffect, useState } from 'react'
import { Link,NavLink } from 'react-router-dom'
export default function Navbar() {
 let token= localStorage.getItem("token");
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow  navColor p-3 fixed-top mb-5">
  <div className="container   ">
    <Link className="navbar-brand navlogo    w-16 " to="/"><img src={logo} className="w-25 " /> Game over</Link>
    <button className="navbar-toggler" type="button" >
      <span className="navbar-toggler-icon " ></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    { token?
     <ul className="navbar-nav me-auto mb-2  mb-lg-0 "> 
      <li className="nav-item">
     <NavLink className={({isActive})=>isActive?"acive nav-link text-white ":"nav-link text-white"} to="/home">Home</NavLink>
      </li>
      <li className="nav-item">
     <NavLink className={({isActive})=>isActive?"acive nav-link text-muted ":"nav-link text-muted "} to="/all">All</NavLink>
      </li>
      <li className="nav-item">
      <div className="dropdown">
  <div className="nav-link text-muted  dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    Platform
  </div>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><Link className="dropdown-item" to={"/platform/pc"}>pc </Link></li>
    <li><Link className="dropdown-item" to={"/platform/browser"}>browser</Link></li>
   
  </ul>
</div>
      </li>
      <li className="nav-item">
      <div className="dropdown">
  <div className="nav-link text-muted  dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    sort-by
  </div>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><Link className="dropdown-item" to={"/sortby/release-date"}>release-date </Link></li>
    <li><Link className="dropdown-item" to={"/sortby/popularity"}>popularity</Link></li>
    <li><Link className="dropdown-item" to={"/sortby/alphabetical"}>alphabetical</Link></li>
    <li><Link className="dropdown-item" to={"/sortby/relevance"}>relevance</Link></li>
   
  </ul>
</div>
      </li>
      <li className="nav-item">
      <div class="dropdown">
  <div class="nav-link text-muted  dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    categories
  </div>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><Link className="dropdown-item" to={"/categories/racing"}>racing </Link></li>
    <li><Link className="dropdown-item" to={"/categories/sports"}>sports</Link></li>
    <li><Link className="dropdown-item" to={"/categories/social"}>social</Link></li>
    <li><Link className="dropdown-item" to={"/categories/shooter"}>shooter</Link></li>
    <li><Link className="dropdown-item" to={"/categories/open-world"}>open-world</Link></li>
    <li><Link className="dropdown-item" to={"/categories/zombie"}>zombie </Link></li>
    <li><Link className="dropdown-item" to={"/categories/fantasy"}>fantasy</Link></li>
    <li><Link className="dropdown-item" to={"/categories/action-rpg"}>action-rpg</Link></li>
    <li><Link className="dropdown-item" to={"/categories/action"}>action</Link></li>
    <li><Link className="dropdown-item" to={"/categories/flight"}>flight</Link></li>
    <li><Link className="dropdown-item" to={"/categories/battle-royale"}>battle-royale</Link></li>    
  </ul>
</div>
      </li>
         </ul>
     
   :<ul className="navbar-nav ms-auto mb-2  mb-lg-0 ">
      
   <li className="nav-item">
    
    </li>
 

    </ul> }        
     {token?
     <ul className="navbar-nav ms-auto mb-2  mb-lg-0 "> 
      <li className="nav-item">
      <NavLink className={({isActive})=>isActive?"acive nav-link btn btn-outline-primary text-primary ms-2":"nav-link btn btn-outline-primary text-primary ms-2"} to="register">Log Out</NavLink>
      </li>
         </ul>
     
   :""

     }
      
    </div>
    </div>
    </nav>
 </div>
  )
}
