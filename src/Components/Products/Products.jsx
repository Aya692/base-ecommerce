import axios from "axios"
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BallTriangle } from "react-loader-spinner";
import { useQuery } from "react-query";
import { Offline, Online } from "react-detect-offline";
import { useNetwork } from "../UseNetwork/useNetwork";

export default function Products() { 
  

 let x = useNetwork();
    
    function getProducts() {
      return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    } 

    let {isLoading , isError , isFetching , data , refetch}= useQuery('featuredProducts' , getProducts , {
        cacheTime: 3000,
        // refetchOnMount: false, 
        // staleTime : 5000 ,
        // refetchInterval: 3000,
        // enabled : false
    }); 
    console.log('is loading' , isLoading);
    console.log('is fetching' , isFetching);
    
    
    // console.log(data?.data.data); 
    
  
   

//     let [products , setProducts] = useState([])
//      let [loading , setLoading] = useState(false)
//    async function getProducts(){ 
//       setLoading(true)
//       let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
//      setProducts(data.data); 
//      setLoading(false)

      
//     }
//     useEffect(()=> {
//         getProducts()
//     } , [])

    return <> 
    {isLoading ? <div className="w-100 py-5 d-flex justify-content-center">

        <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
  />

    </div> :     <div className="container">
      <div className="row">
     {data?.data.data.map((product)=> {
        return <div key={product._id} className="col-md-2 product">
          <div className="p-3">
              <img src={product.imageCover} className="w-100" alt="" /> 
              <span>{product.category.name}</span> 
              <h5>{product.title.split(' ').slice(0,2).join(' ')}</h5> 

              <div className="d-flex justify-content-between my-3">
                  <div>
                      {product.price} EGP
                  </div>
                  <div>
                    <i class="fa-solid fa-star rating-color"></i>
                      {product.ratingsAverage}
                  </div>
              </div>
          </div>
        </div>

     })}
    </div>
 </div>}
   

   <button onClick={refetch} className="btn btn-success w-100">get products</button> 

  
    {x}

     <Helmet>
                <meta charSet="utf-8" />
                <title>Products</title>
                 <link rel="canonical" href="http://mysite.com/example" />
    </Helmet> 


   
 </>  

 }
 
       

