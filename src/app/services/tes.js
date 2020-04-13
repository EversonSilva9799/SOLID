const fs = require('fs');
const path = require('path');

let dados = fs.readFileSync(path.join(__dirname, 'agendamentos.json'));

dados = JSON.parse(dados.toString());
console.log(dados[0]);
