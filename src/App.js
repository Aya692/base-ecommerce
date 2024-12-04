

import Navbar from './Components/Navbar/Navbar';
import { Register } from './Components/Register/Register';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home  from './Components/Home/Home';
import Products from './Components/Products/Products';
import Login from './Components/Login/Login';
import UserContextProvider, { UserContext } from './Components/UserContext/UserContext'; 
import { useContext, useEffect } from 'react';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import Categories from './Components/Categories/Categories';
import { QueryClient, QueryClientProvider } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import Parent from './Components/Parent/Parent';


 let x = createHashRouter([
  {path: '' , element: <Layout/> , children: [
    {index: true , element :<ProtectedRoute><Home/></ProtectedRoute>},
    {path: 'products' , element: <ProtectedRoute><Products/></ProtectedRoute>},
    {path: 'login' , element: <Login/>},
    {path: 'register' , element: <Register/>},
    {path: 'categories' , element: <Categories/>} ,
    {path: 'parent' , element: <Parent/>}
  ]}
 ])

export default function App() { 
  
  let queryClient = new QueryClient(); 

return <>  
    
<QueryClientProvider client={queryClient}>


 <UserContextProvider>
  <RouterProvider router= {x}></RouterProvider>

  </UserContextProvider> 
  <ReactQueryDevtools initialIsOpen= 'false' position='bottom-right'/>
  
</QueryClientProvider>
    

  </>

  
}


