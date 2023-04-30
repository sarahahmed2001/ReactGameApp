import logo from './logo.svg';
import './App.css';
import Login from '../src/Authantication/Login/Login'
import Register from '../src/Authantication/Register/Register'
import Layout from '../src/Component/Layout/Layout'
import Home from '../src/Component/Home/Home'
import React, { Profiler, useState ,useEffect} from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import AllGames from './Component/AllGames/AllGames';
import GameDetails from './Component/GameDetails/GameDetails'
import Platform from './Component/Platform/Platform'
import SortBy from './Component/SortBy/SortBy'
import Categories from'./Component/Categories/Categories'
export default function App() {
  let [userdata,setuser]=useState(null)
  
  function logOut(){
    setuser(null)
    localStorage.removeItem("token")
   return  <Navigate to="/"/>
  }
  function Protectrouting(props){
    if (localStorage.getItem("token")){
      return props.children
    }
    else{
  return < Navigate to="/"/>
    }
  }

  let routes =createBrowserRouter([
    
    {path:"",element:<Layout logOut={logOut}/>,children:[
    {index:true,element:<Login/> },
    { path:"home",element:<Home/> },
    { path:"all",element:<AllGames/> },
    { path:"register",element:<Register/>},
    { path:"gamedetails/:id",element:<GameDetails/>},
    { path:"platform/:type",element:<Platform/>},
    { path:"categories/:type",element:<Categories/>},
    { path:"sortby/:type",element:<SortBy/>},
   ]},
 ])
  return (<>
  <RouterProvider router={routes} />
  </>
  )
}


