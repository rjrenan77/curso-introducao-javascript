var pacientes = document.querySelectorAll(".paciente");
 
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
	// var alvoEvent = event.target;
	// var paiDoAlvo = alvoEvento.parentNode
	event.target.parentNode.classList.add("fadeOut");
	
	setTimeout(function(){
		event.target.parentNode.remove();
	}, 500);
});