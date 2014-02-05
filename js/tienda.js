	var productos = ["Guantes", "Pantalones", "Espinilleras","Rodilleras","Combas","Coquillas","Coderas","Bucales", "Chandal"];
	var imgPeque = ["images/productos/1.jpg", "images/productos/2.jpg", "images/productos/3.jpg", "images/productos/4.jpg", "images/productos/5.jpg", "images/productos/6.jpg", "images/productos/7.jpg", "images/productos/8.jpg", "images/productos/9.jpg"];
	var precios = [80,35,45,20,15,5,20,12,45];
	var productId = [1,2,3,4,5,6,7,8,9];
	var precioTransporte = [6, 12, 20, "gratis"];
	var IVA = 0.18;
	var uniUser;		
//JAVASCRIPT A EJECUTARSE UNA VEZ CARGADA LA PAGINA:	
window.onload = function(){
		var DIVS = document.getElementsByName("DIVS");
		for (i in productos){
			DIVS[i].innerHTML = '<div><img id="imgP'+i+'" class="imagen" src="' +imgPeque[i]+ '"><div class="etiquetas"><b><span id="pro'+i+'">' +productos[i]+ '</span>: <span id="pre'+i+'">' + precios[i] + '€</span></b></div>' + '</span><span class="uniBien">Unidades:</span> <input class="uniBien" type="number" id="uniUser'+i+'" name="uniUser'+i+'" value="0" size="2" /></div></div>';
		} 
		
}
window.addEventListener('load',inicio,false);
function inicio(){
	if(document.URL.split("/")[document.URL.split("/").length-1].split("?")[0]=="tienda.html" && document.URL.split("/")[document.URL.split("/").length-1].split("?")[1]!=null){
			var unidades = document.getElementsByClassName('uniBien');
			for(x=0;x<unidades.length;x++){
	  			unidades[x].style.visibility="visible";
	  		}
			boton = document.getElementById('botontienda');
			boton.style.visibility="visible";
	}
	var bot = document.getElementById('boton');
	bot.addEventListener('click',enviar);
}
function enviar(){
	document.location.href="carrito.html";	
}
