function calcular(){
    //Entrada
    var numBook = parseInt(document.getElementById('numBook').value);
    var resultado = document.getElementById('resultado');
    
    //Processamento
    if (numBook >= 7){ 
        var valor = numBook * 15
    }

    
    if (numBook > 0 && numBook < 7) {
       var valor = numBook * 22
    }
    //Saida
    

resultado.innerText = `o preço final é:  ${valor}`;
    
    
}