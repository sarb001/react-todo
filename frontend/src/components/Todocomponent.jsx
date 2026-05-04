
// React.memo or  memo Hook 

import React, { useState } from "react"


// Memoizing a component means - when props are not changed , dont  re-render the component 

export function Todocomponent(){

    const[title,setTitle] = useState('Basic State ');
    
    const Updatehandler = () => {
    //    setTitle('Changing the  Main title ' + Math.random());
       setTitle('Changing the  Main title ');
    }

    return (
        <div>
    <button onClick={Updatehandler}> Click  to update </button>    
            
                 <Childcomponent maintitle = {title}  />
              
        </div>
    )
}

// child ony re-render when props passed from Parent changed 

export const Childcomponent = React.memo(({maintitle}) => {

    console.log('child component 222222 -',maintitle);
    return (
        <>
           <div>
                 <h3> Inside to do Component Title is - {maintitle}  </h3>
                    <h2> Components are there Right now  </h2>
                    <h2> Components are there Right now  </h2>
                    <h2> Components are there Right now  </h2>
                    <h2> Components are there Right now  </h2>
                    <h2> Components are there Right now  </h2>
                    <h2> Components are there Right now  </h2>
                    <h2> Components are there Right now  </h2>
                    <h2> Components are there Right now  </h2>
                    <h2> Components are there Right now  </h2>
                 </div>
        </>
    )
})