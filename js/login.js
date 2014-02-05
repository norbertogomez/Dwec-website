window.addEventListener('load',inicio);
username = document.querySelector("#login input[name='usu']").value;
password = document.querySelector("#login input[name='pass']").value;

var admin = 2;
function inicio(){
	if( document.URL.split("/")[document.URL.split("/").length-1].split("?")[1]==null){
		form = document.getElementById("formlogin");
		form.style.visibility="visible";
		loginDIV = document.getElementById("login");
		loginDIV.style.visibility = "visible";
		blogin = document.getElementById("blogin");
		blogin.addEventListener("click",login);
	}else{
		if(document.URL.split("/")[document.URL.split("/").length-1].split("?")[1]!=null){
			if(document.URL.split("/")[document.URL.split("/").length-1].split("?")[1] == "usu=admin"){
				modoAdmin();
			}
			else{
				if(document.URL.split("/")[document.URL.split("/").length-1].split("?")[1] == "usu=guest"){
					modoUser();	
				}
			}
		}
	}
}
function login(){
	var valido = false;
	var user;
	username = document.querySelector("#login input[name='usu']").value;
	password = document.querySelector("#login input[name='pass']").value;
	users=["guest","admin"];
	pass=["guest","admin"];
	for(x=0;x<users.length;x++){
		if(username==users[0] && password==pass[0]){
			document.location.href=document.URL.split("/")[document.URL.split("/").length-1].split("?")[0]+"?usu=guest";
			valido = true;
		}
		if(username==users[1] && password==pass[1]){
			document.location.href=document.URL.split("/")[document.URL.split("/").length-1].split("?")[0]+"?usu=admin";
			valido = true;
		}
	}
}
function modoAdmin(){
        	var dentrodeLI = document.getElementsByTagName("li");
			var dentrodeUL = document.getElementsByTagName("ul");
			var dentrodeDIV = document.getElementsByTagName("div");
			var listaElementos_Li = document.getElementsByTagName("li");
			var listaElementos_A = document.getElementsByTagName("a");
			var elemento_Li_nuevo = document.createElement("li");
    	  	var textode_Li_nuevo = document.createTextNode("");
			elemento_Li_nuevo.appendChild(textode_Li_nuevo);
			dentrodeUL[0].appendChild(elemento_Li_nuevo);
			var elemento_A_nuevo = document.createElement("a");
			var textode_A_nuevo = document.createTextNode("Admin");
			elemento_A_nuevo.appendChild(textode_A_nuevo);
			elemento_A_nuevo.href = "#";
			dentrodeLI[10].appendChild(elemento_A_nuevo)
}
function modoUser(){
			alert("Entra");
			var dentrodeLI = document.getElementsByTagName("li");
			var dentrodeUL = document.getElementsByTagName("ul");
			var dentrodeDIV = document.getElementsByTagName("div");
			var listaElementos_Li = document.getElementsByTagName("li");
			var listaElementos_A = document.getElementsByTagName("a");
			var elemento_Li_nuevo = document.createElement("li");
    	  	var textode_Li_nuevo = document.createTextNode("");
			elemento_Li_nuevo.appendChild(textode_Li_nuevo);
			dentrodeUL[0].appendChild(elemento_Li_nuevo);
			var elemento_A_nuevo = document.createElement("a");
			var textode_A_nuevo = document.createTextNode("Tienda");
			elemento_A_nuevo.appendChild(textode_A_nuevo);
			elemento_A_nuevo.href = "tienda.html";
			dentrodeLI[10].appendChild(elemento_A_nuevo);
			
}
