var express = require('express');
var router = express.Router();

// GET /comments

router.get('/', function(req, res) {
  // Mock: lista de comentários
  res.json([
    { id: 1, content: 'Comentário 1', author: 'Admin', taskId: 1 },
    { id: 2, content: 'Comentário 2', author: 'User', taskId: 2 }
  ]);
});

// POST /comments

router.post('/', function(req, res) {
  const { content, author, taskId } = req.body;
  // Mock: adicionar comentário
  res.json({ id: Math.floor(Math.random() * 1000), content, author, taskId });
});

module.exports = router;
