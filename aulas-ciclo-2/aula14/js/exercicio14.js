window.onload=function(){

    function calcula(x){
        if(num >=1 && num <=10){
            for(let i=1; i<=10;i++){
                document.write(`${x} x ${i} = ${x*i}<br>`);
            }
        }else{
            alert('Opção invalida!\nInsira um valor NUMÉRICO enter 1 e 10');
            }
    }   

let num = prompt('Insira um numero de 1 a 10');
calcula(num);
}
