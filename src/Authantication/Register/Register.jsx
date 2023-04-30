import React, { Profiler, useState ,useEffect} from 'react'
import img1 from '../../assets/img2.jpg'
import img2 from '../../assets/img1.png'
import { useNavigate ,Link, Navigate } from 'react-router-dom'
import * as Yup from 'yup'
import { Formik, useFormik } from 'formik'
import{getLoginData}from'../../Network/Api'
import {getRegisterData} from'../../Network/Api'
export default function Register() {
  let [errmessage, seterror]=useState("");
  let [loader,setloader]=useState(false);
  let navigate=useNavigate()
  let validata= Yup.object({
    first_name:Yup.string().required("first name is required").min(3),
    last_name:Yup.string().required("last name is required").min(3),
    email:Yup.string().required("email is required ").email(),
    password:Yup.string().required("password is required").matches(/^[A-Z][a-zA-Z0-9]{3,16}$/),
    age:Yup.number().required(),
     
  })  
  let userform=useFormik({
    initialValues:{
      first_name:"",
      last_name:"",
      email:"",
      password:"",
      age:"",
    }, onSubmit:(values)=>{getData(values)},
    validationSchema:validata,
  })
   function getData(values){
    setloader(true)
    getRegisterData(values).catch((err)=>{
      seterror(err)
    }).then((res)=>{
      console.log("res",res);
      setloader(false)
       navigate("/")
    })
  }

  return (
    <div>
      <div className="container p-5 mt-5">
      <div className="row pt-4 g-0">
       <div className="col-md-6 ">
        <img src={img1}className='w-100' height={530} alt="" />
       </div>
       <div className="col-md-6 text-center card  pt-5">
        <div>
        <img src={img2} className='w-16' alt="" /></div>
        <h3 className='text-center text-muted'>
          Create My Account 
        </h3>
        <form onSubmit={userform.handleSubmit}>
        <div className=' d-flex justify-content-between '>
            <div className='ms-3 w-45'>
         <input onChange={userform.handleChange} onBlur={userform.handleBlur}defaultValue={""} name='first_name' id='first_name' placeholder='first_name' type='text' className='form-control change'/>
         <p className='text-danger'>{userform.errors.password}</p></div>
         <div className='me-3 w-45'>
         <input onChange={userform.handleChange} onBlur={userform.handleBlur}defaultValue={""} name='last_name' id='last_name' placeholder='last_name' type='text' className='form-control change'/>
         <p className='text-danger'>{userform.errors.password}</p></div>
        </div>

       <div className='mt-2 px-3 mx-auto'>
          
         <input onChange={userform.handleChange} onBlur={userform.handleBlur} defaultValue={""} name='email' placeholder='Email' id='email' type='email' className='form-control change'/>
         <p className='text-danger'>{userform.errors.email}</p>
     </div>

 <div className=' px-3 mx-auto'>

      <input onChange={userform.handleChange} onBlur={userform.handleBlur}defaultValue={""} name='age' id='age' placeholder='age' type='number' className='form-control change'/>
      <p className='text-danger'>{userform.errors.password}</p>
     </div>
     <div className='px-3 mx-auto'>
           <input onChange={userform.handleChange} onBlur={userform.handleBlur}defaultValue={""} name='password' id='password' placeholder='password' type='password' className='form-control change'/>
           <p className='text-danger'>{userform.errors.password}</p>
      </div>

   
   
      { errmessage!=""?  <div className='alert alert-danger'>
      {errmessage}
     </div>
     :" "}
        
           {loader?<button  type='submit' className='btn p-2 w-75 text-white mx-auto login-button '>
               <i className='fa-solid fa-spinner fa-spin text-white'></i>  
                  </button>:
          <button type='submit' className='btn p-2 w-75 text-white mx-auto login-button'>Create Account</button>
           }
           <p className='text-muted register-p'>This site is protected by reCAPTCHA and the <a href="https://policies.google.com/privacy" className='text-muted'> Google Privacy </a>Policy and Terms of <a href="https://policies.google.com/terms" className='text-muted'> Service apply</a>.
        
           </p>
            </form>
           <div className='w-100 px-3 mx-auto'>
            <hr />
           </div>
           <div className='text-center text-muted cursor-pointer '>
           Already member ? <span className='text-primary'>
           <Link  className='text-decoration-none' to={"register"}> Log in {'>'}</Link> 
           </span>
           </div>
       </div>
       
      </div>

     
      </div>
    </div>
  )
}
