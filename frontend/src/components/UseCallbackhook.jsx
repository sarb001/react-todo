import { useEffect, useState } from "react"


export const UseCallbackHook = () => {

    const[query,setquery] = useState('');

     const DatafromApi = () => {
         console.log('typing--',query);
     }

    useEffect(() => {
         console.log('Effect runnig ')
       DatafromApi();
    },[DatafromApi])



    return (
        <>
            <h3> Use Callback fn is here  </h3>
            <div>
                <input  type = "text"  placeholder="Enter text...." 
                 value = {query}
                 onChange={(e) => setquery(e.target.value)}
                />
            </div>
        </>
    )
}