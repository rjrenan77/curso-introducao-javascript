 // console.log("fui carregado de arquivo externo!");
  var titulo = document.querySelector(".titulo");
  titulo.textContent = "Aparecida Nutricionista";

  var paciente = document.querySelector("#primeiro-paciente");
  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = document.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = document.querySelector(".info-imc");

  var pesoEhValido = true;
  var alturaEhValida = true;

  if(peso<= 0 || peso>=1000){
  	console.log("peso inválido");
  	pesoEhValido = false;
  	tdPeso.textContent = "Peso Inválido";
  }

  if(altura<=0 || altura>=3.00){
  	console.log("altura inválida");
  	alturaEhValida = false;
  	tdAltura.textContent = "Altura inválida"
  }

  if(alturaEhValida && pesoEhValido){
  	var imc = peso/(altura*altura);	
  	console.log("O imc é = " + imc);
  }

  

  var tdImc = document.querySelector(".info-imc");
  tdImc.textContent = imc; //alterando o valor da tabela imc de forma dinamica

  //console.log(paciente);
  //console.log(tdPeso);
  //console.log(peso);
 // console.log(altura);
  //console.log(imc);