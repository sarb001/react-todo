import { useState } from "react"

export function Createtodo(){
    const [Title,setTitle] = useState('');
    const [Description,setDescription] = useState('');

    const Todohander = () => {
        console.log('title is here  -',Title);
        console.log('desc is her e -',Description);

            fetch('http://localhost:3000/todo',{
                 method : "POST",
                 headers : {
                    'Content-Type' : 'application/json'
                 },
                 body : JSON.stringify({
                    title : Title,
                    description : Description
                 })
            })
            .then(res => res.json())
            .then(data => console.log('data',data))
            .catch(err => console.log('err -',err))
            console.log('data entered ');
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
             <div style = {{padding : '10px'}}>
                <button onClick={Todohander}> Add Todo </button>
             </div>
        </>
    )
}