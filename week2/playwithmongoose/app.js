const db = require('./database/setup'); // Do not edit/remove this line


// Create todo with name and priority (done = false by default)
function createTodo(name, priority) {
    const newTodo = new db({
        name: `${name}`,
        priority: `${priority}`
    })
    newTodo.save()
    console.log(newTodo)
}

createTodo('touch Grass', '1')


// Complete one todo by name (update property done = true)
function completeTodo(name) {
    db.updateOne(
        {name: `${name}`},
        {done : true}
    )
}

completeTodo('Walk the dog')


// Delete one todo by name
function deleteTodo(name) {
    db.deleteOne(
        {name: `${name}`}
    )
}


module.exports = { createTodo, completeTodo, deleteTodo }; // Do not edit/remove this line
