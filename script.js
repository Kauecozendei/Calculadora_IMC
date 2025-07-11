
var peso = 0;
var altura = 0;
var imc = 0;
var resultado = 0;
var classificar;

function calculadora(event){
    event.preventDefault();
   
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = peso / (altura * altura);
    
    console.log(imc);

    resultado = document.getElementById('resultado');
    resultado.innerHTML = '<br/> Seu imc é: ' + imc.toFixed(2);

    // Classificando as pessoas de acordo com o IMC delas.
    classificar = document.getElementById('classificar');
    if(imc < 17){
        classificar.innerHTML = '<br/> Portanto você está muito abaixo do peso';

    }else if(imc >= 17 && imc <= 18.49){
        classificar.innerHTML = '<br/> Portanto você está abaixo do peso';

    }else if(imc >= 18.5 && imc <= 24.99){
        classificar.innerHTML = '<br/> Portanto seu peso está eutrofico';

    }else if(imc >= 25 && imc <= 29.99){
        classificar.innerHTML = '<br/> Portanto você está acima do peso';
    }else if(imc > 30){
        classificar.innerHTML = '<br/> Cuidado, você está obeso';
    }

    // Limpando os campos de peso e altura preenchido pelos usuários
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';

    // Limpando o campo do IMC do usuário.
    return imc = 0;
}