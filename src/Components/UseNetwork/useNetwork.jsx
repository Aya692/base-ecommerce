import { useEffect, useState } from "react"


export function useNetwork(){
    let [isOnline , setIsOnline] = useState(true)



    useEffect(()=> {
        detectOnline()
    } , [])

    
    function detectOnline() {
        window.addEventListener('online' , function(){
            setIsOnline(true)
        })


        window.addEventListener('offline' , function(){
            setIsOnline(false)
    } )
} 

return <>

  {isOnline? <div className="network"> <i className="fas fa-wifi"></i>you are online</div>: <div className="newtwork">you are offline</div>}
</>
}