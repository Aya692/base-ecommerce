import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../UserContext/UserContext"
import { useContext } from "react"

export  default function Navbar() {
   let navigate = useNavigate()
  let {userToken , setUserToken} = useContext(UserContext)

  function logOut(){
    localStorage.removeItem('userToken');
    setUserToken(null);
    navigate('/login')
    
  }


    return <>
       
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" >Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
    {userToken !== null? <> 
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to='/' aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='products'>products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='categories'>categories</Link>
        </li>
     
        <li className="nav-item">
          <Link className="nav-link" to='parent'>Parent</Link>
        </li>
     
       
      </ul>
    </> : ''}

    {userToken !==null ?   <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
           <li className="nav-item">
             <span onClick={()=> logOut()} className="nav-link" >logout</span>
           </li>
        </ul> :  
         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
         <li className="nav-item">
           <Link className="nav-link active" to='login' aria-current="page" >login</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to='register'>register</Link>
         </li>

       </ul>}
     
     

    </div>
  </div>
</nav>
    
    </>
}