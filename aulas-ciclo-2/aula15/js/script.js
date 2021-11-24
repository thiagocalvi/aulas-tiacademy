// let m = 1;

//console.log(typeof m);

// if(typeof m === 'number'){
//     console.log(`O dado informado é um number: ${m} -> ${typeof m}`);
// }else{
//     console.log(`O dado informado não é um number: ${m} -> ${typeof m}`);
// }


window.onload=function(){
    //alert('Olá Povo Do JS');

    const botao = document.getElementById('btn');
    const txtBox = document.querySelector('#txtBox');
    const caixa = document.querySelector('#caixa');
    
    botao.addEventListener('click', function(){
        caixa.innerHTML += '' + txtBox.value + '';
    })
}
