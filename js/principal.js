 // console.log("fui carregado de arquivo externo!");
 var titulo = document.querySelector(".titulo");
 titulo.textContent = "Aparecida Nutricionista";

 var pacientes = document.querySelectorAll(".paciente");


 for(var i = 0; i < pacientes.length; i++){

  console.log(pacientes[i]);

  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;
  console.log(peso);



  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;
  console.log(altura);

  var tdImc = paciente.querySelector(".info-imc");

  var pesoEhValido = true;
  var alturaEhValida = true;

  if(peso<= 0 || peso>=1000){
    console.log("peso inválido");
    pesoEhValido = false;
    tdImc.textContent = "Peso Inválido";
    paciente.classList.add("paciente-invalido");
  }

  if(altura<=0 || altura>=3.00){
    console.log("altura inválida");
    alturaEhValida = false;
    tdAltura.textContent = "Altura inválida"
    paciente.classList.add("paciente-invalido");
  }

  if(alturaEhValida && pesoEhValido){
    var imc = peso/(altura*altura); 
    console.log("O imc é = " + imc);
    tdImc.textContent = imc.toFixed(2);
  }

}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){

  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  //console.log(nome + peso + altura + gordura);

  var pacienteTr = document.createElement("tr");
  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);

  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

  //console.log(pacienteTr);

});
//console.log(botaoAdicionar);







//var tdImc = document.querySelector(".info-imc");
  //tdImc.textContent = imc; //alterando o valor da tabela imc de forma dinamica

  //console.log(paciente);
  //console.log(tdPeso);
  //console.log(peso);
 // console.log(altura);
  //console.log(imc);