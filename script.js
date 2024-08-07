document.getElementById('imcFormulario').addEventListener('submit', function(event){

    event.preventDefault()

    const nome = document.getElementById('nome').value
    const altura = Number(document.getElementById('altura').value) / 100
    const peso = Number (document.getElementById('peso').value)

    if(!altura || !peso){
        alert('Por favor, insira valores válidos para altura e peso.')
    }
    

    const imc = peso / (altura * altura)

    let classification = ''

    if (imc < 16){
        classification = 'Gravíssimo: muito abaixo do peso'
    }else if(imc >= 16 && imc < 17){
        classification = 'Grave: abaixo do peso'
    }else if(imc >= 17 && imc < 18.5){
        classification = 'Abaixo do peso'
    }else if(imc >= 18.5 && imc < 25){
        classification = 'Saudável: Peso dentro do limite.'
    }else if(imc >= 25 && imc < 30){
        classification = 'Sobrepeso'
    }else if(imc >= 30 && imc < 35){
        classification = 'Atenção: Obesidade grau I'
    }else if (imc >=35 && imc < 40){
        classification = 'Cuidado! Obesidade grau II'
    }else{
        classification = 'Obesidade grau III, procure um nutricionista!'
    }

    document.getElementById('resultado').innerHTML = `
    <h2>Resultado: </h2>
    <p>Nome: ${nome} </p>
    <p>IMC: ${imc.toFixed(2)}</p>
    <p>Classificação: ${classification}</p>
    `

})