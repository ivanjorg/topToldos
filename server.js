const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime');

const server = http.createServer((req, res) => {
  // Define a rota de acesso baseada na URL da requisição
  let route = req.url;
  if (route === '/') {
    route = '/index.html';
  }

  // Define o caminho completo do arquivo solicitado
  const filePath = path.join(__dirname, 'public', route);

  // Verifica se o arquivo existe
  fs.access(filePath, (err) => {
    if (err) {
      // Se o arquivo não existe, retorna um erro 404
      res.writeHead(404);
      res.end('File not found');
    } else {
      // Se o arquivo existe, lê o conteúdo e retorna como resposta
      fs.readFile(filePath, (err, data) => {
        if (err) {
          // Se houver um erro na leitura do arquivo, retorna um erro 500
          res.writeHead(500);
          res.end('Server error');
        } else {
          // Define o tipo de conteúdo da resposta com base na extensão do arquivo
          const mimeType = mime.getType(filePath) || 'text/html';
          res.writeHead(200, { 'Content-Type': mimeType });

          // Retorna a resposta com o conteúdo do arquivo
          res.end(data);
        }
      });
    }
  });
});

// Inicia o servidor na porta 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
