const fs = require('fs');

// Cria um arquivo logs.txt com conteúdo inicial
fs.writeFileSync('logs.txt', 'Log inicial\n', (err) => {
  if (err) throw err;
  console.log('Arquivo logs.txt criado!');
});