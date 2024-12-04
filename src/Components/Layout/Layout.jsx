
import Navbar from "../Navbar/Navbar"
import { Register } from "../Register/Register"
import { Link, Outlet } from "react-router-dom"
import { useContext, useEffect } from 'react';
import { UserContext } from "../UserContext/UserContext";
// import { Offline, Online } from "react-detect-offline";

export default function Layout() {

    
  let {setUserToken} = useContext(UserContext)
  useEffect(()=> {
    if(localStorage.getItem('userToken') !== null) {
      setUserToken(localStorage.getItem('userToken'))
    }
  } , []) 
    return <>
     
       <Navbar/>  
       <Outlet></Outlet>


   {/* <div>
    <Offline>
      <div className="network">

        <i className="fas fa-wifi">you are offline</i>
      </div>
    </Offline>
  </div> */}

       
     
    </>
}