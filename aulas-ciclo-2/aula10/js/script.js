//match() Procura uma palavra em uma string.
//g/i/m

let nome = 'Marcelo da Silva';

// console.log(nome.match('silva'));

//serach() procura pela ocorrência e retorna a posição na cadeia de strings 

// console.log(nome.search(/m/i));


//replace() substitui uma string por outra, simple assim, ele pesquisa

// let str = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//     Quis omnis culpa iusto aperiam fuga similique perspiciatis libero, 
//     voluptas magnam vero nam qui laboriosam ex corporis! Iure soluta libero eveniet numquam.`;
// let strOutra = str.replace(/sit/gi,'não');
// console.log(strOutra)

//localeCompare() compara e efetua a comparação entre dus strigs
//  let gato = 'gato';
//  let outroGato = 'gato';

//  console.log(gato.localeCompare(/Gato/ig));

//toString() irá converter um valor qualquer em uma string

// let num = Number('1');
// console.log(num.toString());


//toLowerCase() Faz a conversão de uma string inteira para caracteres minúsculos (caixa baixa)

// let str = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//      Quis omnis culpa iusto aperiam fuga similique perspiciatis libero, 
//      voluptas magnam vero nam qui laboriosam ex corporis! Iure soluta libero eveniet numquam.`;

    

// console.log(str.toLowerCase());


// let gato = 'gato';
// let outroGato  = 'GATO';

// let cat1 = gato.toLowerCase();
// let cat2 = outroGato.toLowerCase()
// console.log(cat1.localeCompare(cat2));



//toUpperCase Faz a conversão de uma string inteira para caracteres maiusculos (caixa alta)

// let str = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
// Quis omnis culpa iusto aperiam fuga similique perspiciatis libero, 
//  voluptas magnam vero nam qui laboriosam ex corporis! Iure soluta libero eveniet numquam.`;

//  console.log(str.toUpperCase());


//trim() Faz a remoção de espaços antes e depois da string especificada

// let str1 = "     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis omnis culpa iusto aperiam fuga similique perspiciatis libero, voluptas magnam vero nam qui laboriosam ex corporis! Iure soluta libero eveniet numquam.    ";

// let str2 = `    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
// Quis omnis culpa iusto aperiam fuga similique perspiciatis libero, 
// voluptas magnam vero nam qui laboriosam ex corporis! Iure soluta libero eveniet numquam.    `;

// console.log(str1.trim());
// console.log(str2);


//NaN 
//Quando uma string for passada para Number(), parseInt ou parseFloat e
//não consiga efetuar a conversão será retornando NaN (Not as Number).
//isNaN().

// let num = 1;
// console.log(isNaN(num));

// if (!isNaN(num)) {
//     console.log('Isto é um numero');
// }else{
//     console.log('Isto não é um numero');
// }


//toFixed() A função "toFixed()" analisa um valor flutuante e retorna uma STRING conforme o parametro de casas 

let valor = 2.456;

console.log(valor.toFixed(1));

//O metado toLocaleString() ira retornar uma string, com uma representação da moeda definida como no parametro currency.
//toLacaleString('pt-BR', {style: 'currency', currency:'BRL'})

console.log(valor.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'}));