// Write your code here
const mongoose = require('mongoose');

const todoSchema = mongoose.Schema(
    {
        title: String,
        priority : Number,   
    }
)


const Todo = mongoose.model('todos', todoSchema)

module.exports = Todo
