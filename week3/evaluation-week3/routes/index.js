var express = require('express');
var router = express.Router();
// DO NOT EDIT OVER THIS LINE //
const mongoose = require('mongoose');
const Todo = require('../models/todos');

router.get("/todos", (req, res) => {
    Todo.find().then(data => {
     res.json({ todos : data });
    })
    
  });

  // POST /todos
router.post('/todos', (req, res) => {
	const todo = new Todo({
	  title: req.body.title,
	  priority: req.body.priority
	});
  
	todo.save()
	  .then(result => {
		res.json({ result: true, todos: result });
	  })
  });


// ROUTE GET /todos
//EXEMPLE DE RÉPONSE :
// {
//   "todos": [
//     {"title": "Aller faire les courses", "priority": 2},
//     {"title": "Faire mes flashcards", "priority": 1},
//     {"title": "Faire une sieste", "priority": 3}
//   ]
// }



// ROUTE POST /todos
//EXEMPLE DE RÉPONSE :
// {
//   "result": true
// }

// DO NOT EDIT UNDER THIS LINE //
module.exports = router;
