import express from 'express';
import createTodo from './types.js';

const PORT  = 3000;

const app = express();
app.use(express.json());    

app.post('/todo' , (req,res) => {
      const body = req.body;
      console.log('body is -',body);

      const  ParsedData =  createTodo.safeParse(body);
      console.log('ParsedData -',ParsedData);

      if(!ParsedData.success){
         return res.status(411).json({
             msg : "Wrong Inputs"
         })
      }
})

app.listen(PORT , (req,res) => {
     console.log("Server is running....")
})