const alunos = ["Julia", "Maria", "Hugo", 70, false];

console.log(alunos);
console.log(typeof(alunos));
//acessando pela posição no array(lista)
console.log(alunos[2]);

//adicionar elemento no final do array(lista)
alunos.push("Gabriel");
console.log(alunos[5]);
console.log(alunos);

//adicionar elemento no início do array(lista)
alunos.unshift("Mecânico");
console.log(alunos);

//remove o ultimo valor de um array(lista)
alunos.pop();
console.log(alunos);

//alterar a ultima entrada no array(lista)
console.log(alunos.length);
alunos[6] = "true";
console.log(alunos);

//índice - posição de determinado elemento da lista
console.log(alunos.indexOf("Julia"));

//ordenar alfabeticamente uma lista
const listaOrdenada = alunos.sort();
console.log(listaOrdenada);

//criar um array e verificar se é um array(lista)
const newList = Array.isArray(alunos);
console.log(newList);


//DOCUMENTAÇÃO: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array