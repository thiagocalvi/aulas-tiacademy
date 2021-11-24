// let loop =0;

// let cores = ['verde','vermelho']

// while(loop < cores.length){
//     console.log(cores[loop]);
//     loop++;
// }

let teste = 0;

do{
    teste = Number(prompt('Digite 0 para sair'));

    switch(teste){
        case 1: alert('Cadastrando');
        break;

        case 2: alert('Cosultando');
        break;

        case 0: alert('Saindo do Sistema');
        break;

        default:
            alert('Opção invalida');
            break;
    }
}while(teste != 0)