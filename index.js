const fs = require('fs')
const { v4: uuidv4 } = require('uuid');

function adicionarLog(nomeAluno){
    const idUnico = uuidv4();
    const dataHora = new Date().toLocaleString("pt-BR");
    const mensagem = `${idUnico}, ${dataHora}, ${nomeAluno}/n`;

    fs.appendFile('logs.txt', mensagem, 'utf8', (err) => {
        if (err){
            console.error('Erro para escrever no arquivo:', err);
        }else{
            console.log('Adicionado com sucesso');
        }
    });
}

adicionarLog("Beatriz Becker Feldman")