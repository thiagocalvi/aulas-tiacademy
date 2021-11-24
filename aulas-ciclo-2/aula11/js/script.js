// function Pessoa (nome){
//     this.nome = nome;

// }

// Pessoa.prototype.mgs = function(){
//     alert('Olá!' + this.nome);
// }

// let novaPossoa = new Pessoa("José")

// novaPossoa.mgs();
// console.log(novaPossoa.nome)


// let Pessoa2 = {
//     'nome':'',
//     'idade':''
// }

// Pessoa2.__proto__.msg = function(){
//     alert('Olá! '+ Pessoa2.nome)
// }

// P.nome = "Marcelo";
// let P = Pessoa2;
// P.msg();

//console.log(Pessoa2)



let Pessoa3 = [
    {
        'nome':'Marcelo',
        'idade': 36,
        'sexo' : 'M'
    },
    {
        'nome':'Suelem',
        'idade': 36,
        'sexo' : 'F'
    },
    {
        'nome':'Marcos',
        'idade': 40,
        'sexo' : 'F'
    },
]

let NPessoa = Pessoa3;
console.log(`Existe, ${NPessoa.length} cadastradas`)
console.log(NPessoa[0].nome);