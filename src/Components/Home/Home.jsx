import React, { useMemo, useState } from "react"
import { Helmet } from "react-helmet"

export default function Home() { 

    const [counter1 , setCounter1] = useState(0)
    const [counter2 , setCounter2] = useState(0)


      function increment1() {
      setCounter1(counter1+1) ;
      
      }
      function increment2() {
        setCounter2(counter2+1)
    } 
    

    let checkCount2Even  =  useMemo(() => {
       console.log('checkcunt2Even'); 
       return counter2%2 == 0;
       
    } , [counter2] )


    return <> 

    <div className="container text-center">
        <div className="row">
            <div className="col-md-6">
              <h1>counter 1</h1> 
              <h6>{counter1}</h6>
              <button onClick={increment1}  className="btn btn-info">increment</button>
            </div>
            <div className="col-md-6">
            <h1>counter 2</h1> 
              <h6>{counter2}</h6>
              <h5>{checkCount2Even? 'Even' : 'Odd'}</h5>
              <button onClick={increment2} className="btn btn-info">increment</button>
          </div>
        </div>
    </div>

     <Helmet>
                <meta charSet="utf-8" />
                <title>Home page</title>
                <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    </>
}
