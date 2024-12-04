import { Navigate, useNavigate } from "react-router-dom";

export default function ProtectedRoute(props){

    console.log(props.children); // 


    if(localStorage.getItem('userToken') !== null) {
        console.log('ok'); 
        return props.children;
        
    }  
    else {
        console.log('not ok');
       return <Navigate to={'/login'}/>        
    }   
   
}