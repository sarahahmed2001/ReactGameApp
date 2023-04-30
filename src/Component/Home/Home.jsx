import React, { Profiler, useState ,useEffect} from 'react'
import img1 from '../../assets/img2.jpg'
import img2 from '../../assets/img1 (1).png'
import { useNavigate ,Link } from 'react-router-dom'
import * as Yup from 'yup'
import 'bootstrap/dist/css/bootstrap.min.css';    
import { Formik, useFormik } from 'formik'
import{getLoginData}from'../../Network/Api'
import{getHomeGames}from'../../Network/Api'
import { click } from '@testing-library/user-event/dist/click'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

export default function Home() {
  let[browse , SetbrowseGame]=useState(true)
  let[count , setCount]=useState(20)
    let navigate=useNavigate()
let [smallList,setsmallList ]=useState([])
let [gamesList,setGamesList ]=useState([])

 function getGamesData(){


  getHomeGames().catch((err)=>{console.log(err);}
  ).then((res)=>{
    setsmallList(res.data.slice(0,3));
    setGamesList(res.data.slice(0,count));
console.log(gamesList);
  }
 )}

useEffect(()=>{
 getGamesData()
 console.log(gamesList);
  })
  function browseGames (){
    navigate("/all")
  }
  function loadMore(){
    if (count==gamesList.length-1){
        setCount( count)
    }
    setCount( count+20)
 }
  return (
    <div>
   <div   className="container-fluid  p-0 ">
   

    <div  className="row  g-0 home pt-4" >
    
       <div className="col-md-12 text-center   mt-5 pt-5">
         <h1 className='home-h2'>Find & track the best <span className='text-info'> free-to-play </span>games!</h1>
         <p className='text-muted'>Track what you've played and search for what to play next! Plus get free premium loot!</p>
         <button className='btn btn-outline-secondary' onClick={browseGames}> Browse Games</button>
       </div>
        <div className="container mt-5 pt-5 pb-5">
          <div className="row g-2 pt-5 ps-5 ms-3">
            <div className="col-md-12 d-flex ">
            <i class="fa-solid fa-robot text-muted fs-2"></i>
            <h2 className='text-muted'>Personalized Recommendations</h2>
            </div>
            {smallList.map((ele,i)=>{return <div key={i} className="col-md-4 p-3">
            <Link className='link' to={"/gamedetails/"+ele.id}>
              <div className='card2 shadow'>
                <div>
                  <img src={ele.thumbnail} className='w-100 ' alt="" />
                </div>
                <div className='d-flex justify-content-between pt-3 p-4 pb-1'>
                  <h4 className='home-h2'>{ele.title}</h4>
                  <p className='badge badgeColor p-2'>Free</p>
                </div>
              </div>
              </Link>
             </div>}) }
             </div>
          </div></div>
    
   
    </div>
    </div>
  )
}
