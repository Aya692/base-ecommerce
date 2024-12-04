
import axios from "axios"
import { useFormik } from "formik"
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as Yup from 'yup'; 
import { UserContext } from "../UserContext/UserContext";


export default function Login() {
    const [error , setError] = useState({}) 
    
    let {setUserToken} = useContext(UserContext)

    let navigate = useNavigate();



  async function submitRegister(values){ 

   let {data} =  await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin` , values)
   .catch((error)=>{
      setError(error.response.data.message) 
        
   })
   
   if(data.message === "success") { 
         localStorage.setItem('userToken' , data.token);
         setUserToken(data.token)
          navigate('/');
         
   }
  
       
  }

  let validationSchema = Yup.object({
    email:Yup.string().email('email is invalid').required('email is required') ,
    password : Yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/),
  })

 

    let formik  = useFormik({
        initialValues: {
         
            email: '',
            password:''
        } ,
        
        validationSchema : validationSchema
       ,
       
        onSubmit : submitRegister
      })
    
    return <>
    <h1>login</h1>
      <h1 className="text-center">Register Now</h1> 
      <div className="w-75 m-auto">
   
         <form  onSubmit={formik.handleSubmit}>

         
   
          <label htmlFor="email">Email:</label>
          <input value={formik.values.email} 
          onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control" type="email" id="email" name="email" />
           
           {formik.errors.email && formik.touched.email?
        <div className="alert alert-danger ">{formik.errors.email}</div>:''}

        
          <label htmlFor="password">password:</label>
          <input value={formik.values.password} 
          onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control" type="password" id="password" name="password" />
            
           {formik.errors.password && formik.touched.password?
        <div className="alert alert-danger ">{formik.errors.password}</div>:''}

           

          <button type="submit" className="btn btn-success m-2">login</button>
          
         </form>
     </div>
    
    </>


}