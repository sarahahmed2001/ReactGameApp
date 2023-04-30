import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import{getSpecificGame} from'../../Network/Api'
import img1 from '../../assets/img2.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';    

import img2 from '../../assets/img1 (1).png'
export default function GameDetails() {
 let id=useParams("id").id; 
 let [loader,setloader]=useState(false);
 let [product , setProduct]=useState(null);

 function getGame(){
    
 getSpecificGame(id).catch((err)=>{
   setloader(true)
 console.log(err);
 }).then((res)=>{
   console.log(res.data);
    setProduct(res.data);
    setloader(true)
 })   
 }
 function openGame() {
  window.open(product.freetogame_profile_url);
 }
 useEffect(()=>{
 getGame()
 })  
  return (
    <div >{loader?<>
      {product?
      <div  className="container mt-4 pt-5 pb-5 ">
       <div className="row g-4 pt-2  mt-3 mx-auto ">
       
         {loader?  <>  
         <div className="col-md-4 position-relative">
         <video controls width="100%" autoPlay={true} loop="" muted="" className='video-hover' >
            <source src={"https://www.freetogame.com/g/"+product.id+"/videoplayback.webm"} type="video/mp4" />
 
          </video>
        
           <img className='img-hover position-absolute top-0 start-0 w-100 pt-2' src={product.thumbnail} alt="" />
           <p className='badge bg-secondary p-3 mx-1'>Free</p>
           <button className='btn btn-primary btn-hover text-white w-75 py-2 ' onClick={openGame}>PLAY NOW  <i className='fas fa-sign-out-alt'></i></button>
           
         </div>
         <div className="col-md-8 text-start ">
            <h1 className='details-font'>
             
              {product.title}
            </h1>
            <h5 className='details-font'>
             About      {product.title}
            </h5>
            <p className='details-font fs-5'>{product.description}</p>
            <h4 className='details-font '>{product.title} Screenshots</h4>
             <OwlCarousel className='owl-theme' loop items={1} autoplay={true}  margin={10} >
                {product.screenshots.map((ele,i)=><div key={i}><img src={ele.image}  className='w-100'/> </div> 
                  )}
                    
             </OwlCarousel>
          
             <h4 className='details-font'>Additional Information</h4>
             <div className="row g-5">
               <div className="col-md-4 ">
                 <h6 className='details-font'>Title</h6>
                 <p className='details-font'>{product.title}</p>
                 <h6 className='text-secondary '>Release Date</h6>
                 <p className='details-font'>{product.release_date}</p>
               </div>
               <div className="col-md-4 ">
                 <h6 className='text-secondary'>Developer</h6>
                 <p className='details-font'>{product.developer}</p>
                 <h6 className='text-secondary'>Genre </h6>
                 <p className='details-font'>{product.genre}</p>
               </div>
               <div className="col-md-4 ">
                 <h6 className='text-secondary'>Publisher</h6>
                 <p className='details-font'>{product.publisher}</p>
                 <h6 className='text-secondary'>Platform</h6>
                 <p className='details-font'>{product.platform}</p>
               </div>
             </div>
         </div>
         </>
                 :  <div class="loadingio-spinner-ellipsis-mkmcmxymoa w-100"><div class="ldio-9gtfltoiha">
                 <div></div><div></div><div></div><div></div><div></div>
                  </div></div>
    }
         </div>
       </div>:""}</>:  <div  className="container-fluid   vh-100  d-flex justify-content-center  align-items-center">
          <div className="row g-4   mx-auto ">
             <div class="loadingio-spinner-ellipsis-mkmcmxymoa    "><div class="ldio-9gtfltoiha">
                    <div></div><div></div><div></div><div></div><div></div>
                     </div>
                     </div></div>
              </div>}
     
    </div>
  )
}
