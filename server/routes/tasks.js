var express = require('express');
var router = express.Router();

// GET /tasks

router.get('/', function(req, res) {
  // Mock: lista de tarefas
  res.json([
    { id: 1, title: 'Tarefa 1', description: 'Primeira tarefa', assignedTo: 'Admin' },
    { id: 2, title: 'Tarefa 2', description: 'Segunda tarefa', assignedTo: 'User' }
  ]);
});

// POST /tasks

router.post('/', function(req, res) {
  const { title, description, assignedTo } = req.body;
  // Mock: criar tarefa
  res.json({ id: Math.floor(Math.random() * 1000), title, description, assignedTo });
});

// PUT /tasks/:id

router.put('/:id', function(req, res) {
  const { id } = req.params;
  const { title, description, assignedTo } = req.body;
  // Mock: atualizar tarefa
  res.json({ id, title, description, assignedTo });
});

// DELETE /tasks/:id

router.delete('/:id', function(req, res) {
  const { id } = req.params;
  // Mock: remover tarefa
  res.json({ message: `Tarefa ${id} removida` });
});

module.exports = router;
