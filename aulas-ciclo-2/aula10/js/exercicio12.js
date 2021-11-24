const palavra = (nome) =>{
    document.write(`Esta palavra tem ${nome.length} carácteres<br>`);
    let upper = nome.toUpperCase();
    let index = 2;
    document.write(`A palavra ${nome.toLowerCase()} ficou ${upper}<br>`);
    document.write(`A letra ${upper[index]} é o 3° caráctere de ${upper}<br>`);
    document.write(`${upper} ficou ${upper.replace(upper[index],'X')} `);
}

userName = prompt('Insira um nome:');

palavra(userName);

