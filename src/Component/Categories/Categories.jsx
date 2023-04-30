import React, { Profiler, useState ,useEffect} from 'react'
import { useNavigate ,Link } from 'react-router-dom'
import{getByCategory}from'../../Network/Api'
import { useParams } from 'react-router-dom'

export default function Categories() {
    let [gamesList,setGamesList ]=useState([])
    let type=useParams("type").type; 
  
    let[count , setCount]=useState(20)
    function getGamesData(){
        getByCategory(type).catch((err)=>{console.log(err);}
     ).then((res)=>{
       setGamesList(res.data.slice(0,count));
       console.log(res.data);
     }
    )}
    function loadMore(){
       if (count==gamesList.length-1){
           setCount( count)
       }
       setCount( count+20)
    }
   useEffect(()=>{
    getGamesData()
     })
  return (
    <div>    <div className="container mt-3 pt-5 pb-5 text-center">
    <div className="row g-4 pt-2 ps-5 ms-3 mt-3 mx-auto ">
      
      {gamesList.map((ele,i)=>{
       return <div key={i} className="col-md-3 " >
        <Link className='link' to={"/gamedetails/"+ele.id}>
         <div className='card2 shadow pb-3' >
           <div>
            <img src={ele.thumbnail} className='w-100 ' alt="" />
          </div>
          <div className='d-flex justify-content-between pt-3 p-4 pb-1'>
            <h5 className='home-h2'>{ele.title.split(" ").slice(0,2).join(" ")}...</h5>
            <p className='badge badgeColor p-2'>Free</p>
           
          </div>
          <p className='text-muted p-3 pb-0 descriptionFont '>
              {ele.short_description.split(" ").slice(0,3).join(" ")}...
            </p>
          <div className='d-flex justify-content-between px-3 align-items-start'>

          <i class="fa-solid fa-plus bg-gray p-1 iconFont"></i>
          <div>
              <span>
             < p className='badge  bg-gray text-dark me-2'>{ele.genre}</p>
              </span>
            <span>
              {(ele.platform=="PC (Windows)")?<i className="fa-brands fa-windows iconFont text-secondary fs-5"></i>:<i className="iconFont fa-solid fa-window-maximize text-secondary fs-5"></i>}</span>
          </div>
          </div>
        </div>
        </Link>
       </div>}) }
      
    </div>
    <button onClick={loadMore} className='btn btn-outline-secondary mt-4'>
          More Games {">"} 
       </button>
  </div></div>
  )
}
