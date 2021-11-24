window.onload=function(){
    const txtBox = document.querySelector('#txtBox');
    const btn = document.querySelector('#btn');
    const resultado = document.querySelector('#resultado');

    btn.addEventListener('click',function(){      
        
        if(isNaN(txtBox.value)){
            alert(`Opção invalida!`);
        }else{
            for(let i=0; i<=10;i++){
                resultado.innerHTML += `${txtBox.value} x ${i} = ${txtBox.value*i}<br>`;
                }
        }
        
        });
}
