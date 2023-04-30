import React, { Profiler, useState ,useEffect} from 'react'
import img1 from '../../assets/img2.jpg'
import img2 from '../../assets/img1.png'
import { useNavigate ,Link } from 'react-router-dom'
import * as Yup from 'yup'
import { Formik, useFormik } from 'formik'
import{getLoginData}from'../../Network/Api'
export default function Login({setuser}) {
    
  let [errmessage, seterror]=useState("");
  let navigate=useNavigate()
  let [loader,setloading]=useState(false);
  let validata= Yup.object({
    
    email:Yup.string().required("email is required ").email(),
    
    password:Yup.string().required("password is required").matches(/^[A-Z][a-zA-Z0-9]{3,16}$/),
     
  })  
  let userform=useFormik({
    initialValues:{

      email:"",
     
      password:"",
    }, onSubmit:(values)=>{getData(values)},
    validationSchema:validata,
  })
   function getData(values){
    setloading(true)
    getLoginData(values).catch((err)=>{
      seterror(err)
    }).then((res)=>{
      console.log(res);
      setloading(false) 
      localStorage.setItem("token",res.data.token)
      
      navigate("/home")
    })
  }

  return (
    <div>
      <div className="container p-5 mt-5">
      <div className="row pt-4 g-0">
       <div className="col-md-6 ">
        <img src={img1}className='w-100' alt="" />
       </div>
       <div className="col-md-6 text-center card  pt-5">
        <div>
        <img src={img2} className='w-16' alt="" /></div>
        <h3 className='text-center text-muted'>
          Log in to Game over 
        </h3>
        <form onSubmit={userform.handleSubmit}>
       <div className='mt-2 w-75 mx-auto'>
          
         <input onChange={userform.handleChange} onBlur={userform.handleBlur} defaultValue={""} name='email' placeholder='Email' id='email' type='email' className='form-control'/>
         <p className='text-danger'>{userform.errors.email}</p>
     </div>
 
     <div className=' w-75 mx-auto'>

      <input onChange={userform.handleChange} onBlur={userform.handleBlur}defaultValue={""} name='password' id='password' placeholder='password' type='password' className='form-control'/>
      <p className='text-danger'>{userform.errors.password}</p>
     </div>
   
      { errmessage!=""?  <div className='alert alert-danger'>
      {errmessage}
     </div>
     :" "}    {loader?<button  type='submit' className='btn p-2 w-75 text-white mx-auto login-button '>
                        <i className='fa-solid fa-spinner fa-spin text-white'></i>  
                      </button>:
                      <button type='submit' className='btn p-2 w-75 text-white mx-auto login-button'>Login</button>
               }
         
        </form>
           <div className='w-75 mx-auto'>
            <hr />
           </div>
           <div className='text-center text-muted cursor-pointer'>
           Not a member yet? <span className='text-primary'>
           <Link to={"register"}>      create Account {'>'}</Link> 
           </span>
           </div>
       </div>
       
      </div>

     
      </div>
    </div>
  )
}
