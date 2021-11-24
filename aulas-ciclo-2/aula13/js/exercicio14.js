let Frutas = [
    {
        fruta : 'Melancia',
        valor : 8.50
    },

    {
        fruta : 'Maça',
        valor : 3.20
    },

    {
        fruta : 'Uva',
        valor : 4.90
    }
]
function emprime(x){
    for(let i of x){
        for(let c in i){
            document.write(`${c} => ${i[c].toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}<br>`);
        }
    }
    
}

emprime(Frutas);