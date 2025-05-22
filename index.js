const fs = require('fs');

//arquivo logs.txt
fs.writeFileSync('logs.txt', 'Log inicial\n', (err) => {
  if (err) throw err;
  console.log('Arquivo logs.txt criado!');
});

  const mensagem = `${idUnico}, ${dataHora}, ${nomeAluno}/n`;
fs.appendFile('logs.txt', mensagem, 'utf8', (err) => 
});