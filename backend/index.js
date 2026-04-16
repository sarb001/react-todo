import express from 'express';
const PORT  = 3000;

const app = express();

app.use(express.json());

app.listen(PORT , (req,res) => {
     console.log("Server is running....")
})