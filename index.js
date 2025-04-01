// Servidor MCP básico para teste
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para processar JSON
app.use(bodyParser.json());

// Rota principal para processar requisições MCP
app.post('/api/mcp', (req, res) => {
  console.log('Requisição recebida:', req.body);
  
  // Resposta simples para teste
  const response = {
    success: true,
    message: 'Olá do servidor MCP!',
    timestamp: new Date().toISOString(),
    received: req.body
  };
  
  res.json(response);
});

// Rota de verificação de status
app.get('/status', (req, res) => {
  res.json({ status: 'online', message: 'Servidor MCP está funcionando!' });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor MCP rodando na porta ${port}`);
});