const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

//arquivo logs.txt
fs.writeFileSync('logs.txt', 'Log inicial\n', (err) => {
  if (err) throw err;
  console.log('Arquivo logs.txt criado!');
});

function adicionarLog(nomeAluno){
  const idUnico = uuidv4();
  const dataHora = new Date().toLocaleString("pt-BR");
  const mensagem = `${idUnico}, ${dataHora}, ${nomeAluno}/n`;
  
  fs.appendFile('logs.txt', mensagem, 'utf8', (err) => {
});
}