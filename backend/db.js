import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/todoDatabase');

const TodoSchema = mongoose.Schema({
    title : {
         type  : String,
         unique : true,
         required : true
    },
    description : {
         type  : String,
         unique : true,
         required : true
    },
},{
    timestamps : true
})

export const Todo = mongoose.model('TodoModel',TodoSchema);