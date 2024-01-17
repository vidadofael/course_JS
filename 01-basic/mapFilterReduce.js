//MAP

const listNumbers = [1, 2, 3, 4, 5];

//multiplicando todos os números por 2 um de cada vez

//este método usa a nova const como uma lista para guardar os novos valores obtidos pela função "map".
const numbersMultiplyBy2 = listNumbers.map(function(numeroAtual) {
    return numeroAtual * 2
})

console.log(numbersMultiplyBy2);

//Outro exemplo:
const usuarios = [
    {
        name: 'Carlos',
        address: 'Rua A, 32',
        age: 32,
        isAdmin: false,
    },
    {
        name: 'Vanessa',
        address: 'Rua 9, 211',
        age: 39,
        isAdmin: true,
    },
    {
        name: 'Ricardo',
        address: 'Rua A, 29',
        age: 41,
        isAdmin: false,
    },
    {
        name: 'Maria',
        address: 'Rua João Goulart, 12',
        age: 28,
        isAdmin: true,
    },
    
]
const funcionario = usuarios.map(function(pessoa) {
    return console.log(
        pessoa.name, 
        pessoa.age, 
        pessoa.address, 
        pessoa.isAdmin
    )
})



//FILTER

const ages = [8, 23, 6, 14, 29, 5, 22];
//separando as idades pares e ímpares
const evenAges = ages.filter(function(evage) {
    return evage % 2 === 0;
});
const oddAges = ages.filter(function(odage) {
    return odage % 2 !== 0;
});

console.log(evenAges);
console.log(oddAges);
console.log(oddAges);