import { useState } from "react"

export function Createtodo(){
    const [Title,setTitle] = useState('');
    const [Description,setDescription] = useState('');

    const Todohander = () => {
        console.log('title -',Title);
        console.log('desc -',Description);
    }

    return (
        <>
             <div> Title - </div>
             <input type = "text" placeholder="Enter text..."  
               value = {Title} 
               onChange={(e) => setTitle(e.target.value)}
             />
             <div> Description - </div>
             <input type = "text" placeholder="Enter Description..."  
               value = {Description} 
               onChange={(e) => setDescription(e.target.value)}
             />
             <div>
                <button onClick={Todohander}> Add Todo </button>
             </div>
        </>
    )
}