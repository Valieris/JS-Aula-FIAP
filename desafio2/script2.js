function calcular(){
    
    var number = parseInt(document.getElementById('number').value);
    var resultado = document.getElementById('resultado');

if(number <= 60 ){
    resultado.innerText = "Voce não recebu multa";

}


else{
 var multa = number - 60
 var multa2 = multa * 100
resultado.innerText = `Seu valor da multa é: ${multa2}`;
}


}