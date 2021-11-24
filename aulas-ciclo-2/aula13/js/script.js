// for(let i=0; i<=10; i++){
//     console.log(i);
// }

// let Pessoas = {
//     nome : 'Steven Roger',
//     idade : 90,
//     heroi : 'Capitão America'
// }

// for(let propiedades in Pessoas){
//     console.log(Pessoas[propiedades]);
// }

// let frutas = ['melancia','manga','banana','uva']

// for(let nomeFruta of frutas){
//     console.log(nomeFruta);
// }

let Herois= [
   
    {
        identidadeSecreta : 'Steven Roger',
        heroi : 'Capitão America',
    },

    {
        identidadeSecreta : 'Tony Stark',
        heroi : 'Homem de Ferro',
    }
    
]

// let marvel = Herois[0].identidadeSecreta;
// console.log(marvel);

Herois.push({identidadeSecreta:'Diana', heroi:'Mulher Maravilha'});
Herois.push({identidadeSecreta:'Bruce Bener', heroi:'Hulk'})


for(let marvel of Herois){
    
    for(let m in marvel){
        console.log(marvel[m]);
    }
}