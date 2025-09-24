var express = require('express');
var router = express.Router();

// POST /auth/login

router.post('/login', function(req, res) {
  const { email, password } = req.body;
  console.log('Login recebido:', email, password);
  // Mock: autenticação simples
  if (email === 'teste@teste.com' && password === '123456') {
    console.log('Login mock bem-sucedido');
    res.json({ token: 'mock-token', user: { id: 1, name: 'Teste', email } });
  } else {
    console.log('Credenciais inválidas para:', email, password);
    res.status(401).json({ error: 'Credenciais inválidas' });
  }
});

// POST /auth/register

router.post('/register', function(req, res) {
  const { name, email, password } = req.body;
  // Mock: registro
  res.json({ id: 2, name, email });
});

module.exports = router;
