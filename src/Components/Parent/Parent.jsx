import { useState } from "react";
import Child from "../Child/Child";

export default function Parent() {  

    let [count , setCount] = useState(0);
    let [name , setName] = useState('Ahmed')

    console.log('Parent render');
     
     return <>
        
       <div>
          <button onClick={()=> setCount((x)=> x+1 )}>Count: {count}</button>   
          <button onClick={()=> setName('Ali')}>change Name</button> 
          <Child name={name}/>
       </div>
     </>
}