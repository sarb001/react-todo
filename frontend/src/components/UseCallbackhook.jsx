import { useCallback, useEffect, useState } from "react"

// when fn is used outside the  useEffect then to  prevent re-creation of  fn,
// we use  useCallback hook 

// It is used for  memoizing the  whole fn'


export const UseCallbackHook = () => {

    const[query,setquery] = useState('');

     const DatafromApi = useCallback(() => {
         console.log('typing--',query);
     },[query])

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