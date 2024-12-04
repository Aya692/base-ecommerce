import axios from "axios"
import { useFormik } from "formik"
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import * as Yup from 'yup';


export function Register(){ 
  

  let phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

      let validationSchema = Yup.object({
        name : Yup.string().min(3 , 'name minlength is 3').max(10 , 'maxlength is 10').required('name is required'),
        email:Yup.string().email('email is invalid').required('email is required') ,
        phone: Yup.string().matches(phoneRegex , 'phone is invalid').required('phone is required'),
        password : Yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/),
        rePassword:Yup.string().oneOf([Yup.ref("password")] , 'password and repassword do not matches').required()
      })


      let navigate= useNavigate();

      const [error , setError] = useState(null);
      const [isLoading , setLoading] = useState(false)
     
  async function submitRegister(values){ 
    setLoading(true)
   let {data} =  await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup` , values)
   .catch((error)=> {
    setError(error.response.data.message);
    setLoading(false)
   })  

   if(data.message === "success") {
    navigate('/login')
    setLoading(false)
      
   }
  
       
  }
  let formik  = useFormik({
    initialValues: {
        name : '',
        phone: '', 
        email: '',
        password:'',
        rePassword:''
    } ,
    
    validationSchema : validationSchema
   ,
   
    onSubmit : submitRegister
  })


    return <>
      <h1 className="text-center">Register Now</h1> 
      <div className="w-75 m-auto">
      {error?<div className="alert alert-danger">{error}</div>:''}
   
         <form  onSubmit={formik.handleSubmit}>

           <label htmlFor="name">Name:</label>
           <input  onChange={formik.handleChange} 
           value={formik.values.name} onBlur={formik.handleBlur} className="form-control" id="name" name="name" type="text"/> 
           
            {formik.errors.name && formik.touched.name ?<div className="alert alert-danger ">{formik.errors.name}</div>:''}
   
          <label htmlFor="email">Email:</label>
          <input value={formik.values.email} 
          onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control" type="email" id="email" name="email" />
           
           {formik.errors.email && formik.touched.email?
        <div className="alert alert-danger ">{formik.errors.email}</div>:''}

          <label htmlFor="phone">phone:</label>
          <input value={formik.values.phone} 
          onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control" type="tel" id="phone" name="phone" />

{formik.errors.phone && formik.touched.phone?
        <div className="alert alert-danger ">{formik.errors.phone}</div>:''}

        
          <label htmlFor="password">password:</label>
          <input value={formik.values.password} 
          onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control" type="password" id="password" name="password" />
            
           {formik.errors.password && formik.touched.password?
        <div className="alert alert-danger ">{formik.errors.password}</div>:''}

            <label htmlFor="repassword">repassword:</label>
          <input value={formik.values.rePassword} 
          onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control" type="password" id="password" name="rePassword" />


{formik.errors.rePassword && formik.touched.rePassword?
        <div className="alert alert-danger ">{formik.errors.rePassword}</div>:''}


          {isLoading? <button type="button" className="btn btn-success m-2">
            <i className="fas fa-spinner fa-spin"></i>
           </button>:<button type="submit" className="btn btn-success m-2">Register</button>}
         </form>
     </div>
    
    </>
}