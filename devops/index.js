const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.end('Hello, world!');
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
