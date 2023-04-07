const request = require('supertest');
const mongoose = require('mongoose');
const app = require('./app');
const Todo = require('./models/todos');
const express = require('express');
const router = express.Router();
const newTodo = {title: "Aller faire les courses", priority:2}


beforeEach(async () => {
	await Todo.deleteOne({ title: new RegExp(newTodo.title, 'i') });
});

it('Todos schema & model', () => {
	expect(Todo).toBeDefined();

	const newFakeTodo = new Todo({
		title: 'Aller promener le chien',
		priority: 3,
	});

	expect(newFakeTodo).toHaveProperty('_id');
	expect(newFakeTodo).toHaveProperty('title', 'Aller promener le chien');
	expect(newFakeTodo).toHaveProperty('priority', 3);
});


it('POST /todos', async () => {
	const res = await request(app).post('/todos').send(
        {title: "Aller faire les courses", priority:2}
    );

	expect(res.statusCode).toBe(200);
	expect(res.body.result).toBe(true);
});


it('GET /todos', async () => {
	await request(app).post('/todos').send(newTodo);
  
	const res = await request(app).get('/todos');

	expect(res.statusCode).toBe(200);
	expect(res.body.todos).toEqual(expect.arrayContaining([
		expect.objectContaining({ _id: expect.any(String), title: newTodo.title, priority: newTodo.priority }),
	])
    );
});



afterAll(async () => {
	await Todo.deleteOne({ title: new RegExp(newTodo.title, 'i') });
	mongoose.connection.close();
});




// POST /todos
router.post('/todos', (req, res) => {
	const todo = new Todo({
	  title: req.body.title,
	  priority: req.body.priority
	});
  
	todo.save()
	  .then(result => {
		res.status(201).json({ message: 'Nouvelle todo créée avec succès', todo: result });
	  })
	  .catch(err => {
		console.log(err);
		res.status(500).json({ error: err });
	  });
  });
  
  // GET /todos
  router.get('/todos', (req, res) => {
	Todo.find()
	  .then(todos => {
		res.status(200).json({ todos: todos });
	  })
	  .catch(err => {
		console.log(err);
		res.status(500).json({ error: err });
	  });
  });
  