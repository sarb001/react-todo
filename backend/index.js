import express from 'express';
import createTodo from './types.js';
import { Todo } from './db.js';
import cors from 'cors';
const PORT  = 3000;

const app = express();
app.use(express.json());    

app.use(cors({
    origin : 'http://localhost:5173'
}))


app.post('/todo' , async(req,res) => {
      const body = req.body;
      console.log('body is -',body);

      const  ParsedData =  createTodo.safeParse(body);
      console.log('ParsedData -',ParsedData);

      if(!ParsedData.success){
         return res.status(411).json({
             msg : "Wrong Inputs"
         })
      }

      const  Response = await Todo.create({
         title : body.title,
         description : body.description
      });

      console.log('Response -',Response);

      return res.status(200).json({
         message : "Todo Created"
      })
})

app.get('/alltodos' , async(req,res) => {
     console.log('Inside all todos -');

     try{

         const  Alltodo = await  Todo.find({});
         console.log('All todos -',Alltodo);
         
         return res.status(200).json({
            message : "All todos Shown"
         })
     }catch(err){
       console.log('err is  -',err);
          return res.status(400).json({
             message : "Not working"
          });
     }

})

app.listen(PORT , (req,res) => {
     console.log("Server is running....")
})