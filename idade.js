// const prompt = require('prompt-sync')();

// const idade = prompt('Digite sua idade: ');

// const maiorIdade = 18;

// if (idade < maiorIdade) {
//     console.log('Você é menor de idade!');
// } else {
//     console.log('Você é maior de idade!');
// };

//// FEITO COM FUNÇÃO ////


function verificarIdade(idade) {
    if (isNaN(idade)) {
        return 'A sua entrada não é um número!'
    }
    if (idade < 0.1) {
        return 'Entrada inválida!';
    } if (idade < 18) {
        return 'Você é menor de idade!';
    } if (idade < 64)  {
    return 'Você é maior de idade!';
    }
    return 'Você é idoso!'
};

function principal() {
    const prompt = require('prompt-sync')();
    const idadeInput = prompt('Informe sua idade: ');
    const output = verificarIdade(idadeInput);
    console.log(output);
}

module.exports = {
    principal
};

// const output = verificarIdade(idadeInput);
// console.log(output);
