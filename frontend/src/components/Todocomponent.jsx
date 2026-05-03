
// React.memo or  memo Hook 

import { useState } from "react"


// Memoizing a component means - when props are not changed , dont  re-render the component 

export function Todocomponent(){

    const[title,setTitle] = useState('Basic State ');

    const Updatehandler = () => {
         setTitle('Changing the  Main title ' + Math.random());
    }

    return (
        <div>
                 <h3> Inside to do Component Title is - {title}  </h3>
                 <button onClick={Updatehandler}> Click  to update </button>
                 <div>
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
        </div>
    )
}