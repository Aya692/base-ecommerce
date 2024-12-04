import { useEffect, useRef, useState } from "react"


export default function Categories(){

    const [counter , setCounter] = useState(0)
     
    let myInput = useRef()
        

     useEffect(()=>{
         myInput.current.focus()
      } )


    return <>
        <h1>Counter Aya: {counter}</h1>
       <button className="btn btn-info" onClick={()=> setCounter(counter+1)}>+</button>
       <button className="btn btn-info" onClick={()=> setCounter(counter-1)}>-</button>
      <input ref={myInput} />

    </>
}