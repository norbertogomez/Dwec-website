var form;
window.addEventListener("load", iniciar);
function iniciar(){
  var boton = document.getElementById("Enviar");
  boton.addEventListener("click", validar);
  form = document.getElementById("form1");
}
function enviarlo(){
  var valid = form.checkValidity(); 
  if(valid){
	form.submit(); 
  }
}
function validar(){
	variables();
	valedad();
	valnom();
}
function variables(){
	error = false;
	nom = document.getElementById("nom").value;
	mail = document.getElementById("mail").value;
	telf = document.getElementById("telf").value;
	edad = document.getElementById("edad").value;
}
function valedad(){
if (edad != "" && edad>=16){
		if(error == true){
			error = true;
		}
		document.getElementById("edad").style.backgroundColor ='#ccffcc';
	}
	else{  
		error = true;
		document.getElementById("edad").style.backgroundColor ='#e35152';
	}
};
function valnom(){
	if (isNaN(nom) && nom != ""){
		if(error == true){
            error = true;
		}
		document.getElementById("nom").style.backgroundColor ='#ccffcc';
	}
	else{
		document.getElementById("nom").style.backgroundColor ='#e35152';
	}
};
function valmail( mail ) {
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (expr.test(mail)){
		if(error == true){
            error = true;
		}
		document.getElementById("mail").style.backgroundColor ='#ccffcc'
	}
	else{
		error = true;
		document.getElementById("mail").style.backgroundColor ='#e35152';
	}   
};