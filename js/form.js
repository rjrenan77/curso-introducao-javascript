var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){

  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  //extraindo informaçoes do paciente do form
  var paciente = obtemPacienteDoFormulario(form); 

  //cria a tr a td do paciente
  var pacienteTr = montaTr(paciente);

  var erros = validaPaciente(paciente);

  console.log(erros);
  if(erros.length > 0){
    
    exibeMensagensDeErro(erros);
    //console.log("paciente invalido!");
    return; //sai da funcao anonima
  }

  // adicionando o paciente na tabela
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

  form.reset();

  var mensagensErro_R = document.querySelector("#mensagens-erro");
  mensagensErro_R.innerHTML = "";

  //console.log(pacienteTr);

});


function exibeMensagensDeErro(erros){
  var ul = document.querySelector("#mensagens-erro");

  ul.innerHTML = "";

  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);

});

}


function validaPaciente(paciente){

  var erros = [];

  if(!validaPeso(paciente.peso)){
    erros.push("Peso é inválido!!");
  }
  if(!validaAltura(paciente.altura)){
    erros.push("Altura é inválida!!");
  }

  if(paciente.nome.length == 0){
    erros.push("Preencha o nome!!");
  }

  if(paciente.gordura.length == 0){
    erros.push("Preencha a gordura!");
  }

  if(paciente.peso.length == 0){
    erros.push("Prencha o peso!!");
  }

  if(paciente.altura.length == 0){
    erros.push("Prencha a altura!!");
  }
  return erros;
}


function montaTr(paciente){

 var pacienteTr = document.createElement("tr");

 pacienteTr.classList.add("paciente");

 pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
 pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
 pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
 pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
 pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

 return pacienteTr;

}

function montaTd(dado, classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}


function obtemPacienteDoFormulario(form){

  //criando um objeto
  var paciente = {
   nome: form.nome.value,
   peso: form.peso.value,
   altura: form.altura.value,
   gordura: form.gordura.value,
   imc: calculaImc(form.peso.value, form.altura.value)
 }

 return paciente;

}