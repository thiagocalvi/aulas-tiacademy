window.onload=function(){
    const txt1 = document.querySelector('#txt_1');
    const txt2 = document.querySelector('#txt_2');
    const resultado = document.querySelector('#resultado');


    txt2.addEventListener('blur',function(){
        let valor1 = Number(txt1.value);
        let valor2 = Number(txt2.value);

        resultado.innerHTML = valor1 + valor2;
    });
}