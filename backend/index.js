import express from 'express';
import createTodo from './types.js';
import { Todo } from './db.js';

const PORT  = 3000;

const app = express();
app.use(express.json());    

// app.post('/todo' , async(req,res) => {
//       const body = req.body;
//       console.log('body is -',body);

//       const  ParsedData =  createTodo.safeParse(body);
//       console.log('ParsedData -',ParsedData);

//       if(!ParsedData.success){
//          return res.status(411).json({
//              msg : "Wrong Inputs"
//          })
//       }

//       const  Response = await Todo.create({
//          title : body.title,
//          description : body.description
//       });

//       console.log('Response -',Response);
// })

app.get('/alltodos' , async(req,res) => {
     console.log('Inside all todos -');

     try{
         return res.status(200).json({
         message : "All todos Shown"
       })
     }catch(err){
       console.log('err -',err);
          return res.status(400).json({
             message : "Not working"
          });
     }

})

app.listen(PORT , (req,res) => {
     console.log("Server is running....")
})