const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const express = require('express'); 

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor Express configurado com sucesso!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

function adicionarLog(nomeAluno) {
  const idUnico = uuidv4();
  const dataHora = new Date().toLocaleString('pt-BR');
  const mensagem = `${idUnico}, ${dataHora}, ${nomeAluno}\n`;

  fs.appendFile('logs.txt', mensagem, 'utf8', (err) => {
    if (err) {
      console.error('Erro ao adicionar mensagem ao arquivo:', err);
    }
  });
}