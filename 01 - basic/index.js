//strings

const firstName = "Raphael";
const lastName = "Dias";

console.log(`Meu nome é ${firstName.toLocaleUpperCase()} ${lastName.toLocaleLowerCase()}`);


const names = 'Felipe, joão, julia';

console.log(names.split(",")); //retorna um array

/*
    DOCUMENTAÇÃO SOBRE STRINGS E SEUS MÉTODOS PARA JAVASCRIPT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

//numbers

const numero = 5;

console.log(numero.toString()); //de número para string
console.log(typeof Number.toString());

//false | true
console.log(2 == 3);

//null & undefined
const x = null; // não tem valor (vazio)
console.log(x);

const y = undefined;
console.log(y); //não definida (valor não definido)

//listas em variáveis
const list = [1, 2, 3, 4, 5];
