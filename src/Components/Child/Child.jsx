import React from "react";


 
 function Child() { 

    console.log('child render');
    
     return <>
        <div>child compnent</div> 
     </>
}
export default React.memo(Child)