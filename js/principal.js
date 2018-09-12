 // console.log("fui carregado de arquivo externo!");
 var titulo = document.querySelector(".titulo");
 titulo.textContent = "Aparecida Nutricionista";

 var pacientes = document.querySelectorAll(".paciente");


 for(var i = 0; i < pacientes.length; i++){

  //console.log(pacientes[i]);

  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;
  //console.log(peso);



  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;
  //console.log(altura);

  var tdImc = paciente.querySelector(".info-imc");

  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);

  if(!pesoEhValido){
    //console.log("peso inválido");
    pesoEhValido = false;
    tdImc.textContent = "Peso Inválido";
    paciente.classList.add("paciente-invalido");
  }

  if(!alturaEhValida){
    //console.log("altura inválida");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida"
    paciente.classList.add("paciente-invalido");
  }

  if(alturaEhValida && pesoEhValido){
    var imc = calculaImc(peso , altura); 
   // console.log("O imc é = " + imc);
    tdImc.textContent = imc;
  }

}

function validaPeso(peso){
  if(peso >= 0 && peso < 1000){
    return true;
  }else{
    return false;
  }
}

function validaAltura(altura){
  if(altura >= 0 && altura < 3.0){
    return true;
  }else{
    return false;
  }
}


function calculaImc(peso , altura){
  var imc = 0;
  imc = peso / (altura * altura);

  return imc.toFixed(2);
}

//console.log(botaoAdicionar);







//var tdImc = document.querySelector(".info-imc");
  //tdImc.textContent = imc; //alterando o valor da tabela imc de forma dinamica

  //console.log(paciente);
  //console.log(tdPeso);
  //console.log(peso);
 // console.log(altura);
  //console.log(imc);