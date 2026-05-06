

// useMemo is used to memoize the computed  value 
// avoid un-necessary re-calculations during re-renders 

import {useMemo, useState } from "react"

export const UseMemo = () => {
    
    const[qty,setqty] = useState(0);

    //  ********* without useMemo
    
    // const Totalcount = () => {
    //     console.log('expee');
    //     const final = 50 * qty ;
    //     return final;
    // };
 
    // ** with useMemo  // only changes when qty changes otherwise not whenver fn re-renders 

    const Totalcount = useMemo(() => {
        console.log('expee');
        const final = 50 * qty ;
        return final;
    },[qty])


    return (
        <>
          <h2> Using React useMemo - {Totalcount} </h2>
          <button onClick={() => setqty(qty + 1)}> Update Count </button>
        </>
    )
}