$(document).ready(eventos);
var menu1 = document.getElementById("dd1");
function eventos(){
	$("#sdd1").hide();
	$("#dd1").mouseover(mostrar);
	$("#dd1").mouseout(ocultar);
	$("#peque img").on('click',cambimg);
	tooltip("#galeria img","tooltip");
	$("#enviar").on('click',validar);
}
function validar(){
   var correcto=true;
   var campos=$('input:required');
   $(campos).each(function(){
      if($(this).val()==''){
         correcto=false;
         $(this).css({"background-color":"#F03","border":"2px solid #F03"});
      }
   });
}
function mostrar(){
	$("#sdd1").show();
}
function ocultar(){
	$("#sdd1").hide();
}
function cambimg(){
		var grande = $("#grande").attr("src");
		var imagen=$(this).attr("src");
		$("#grande").attr("src",imagen);
		$("#grande").attr("alt",imagenalt);
}
function tooltip(target_items, name){
 $(target_items).each(function(i){
		$("body").append("<div class='"+name+"' id='"+name+i+"'><p>"+$(this).attr('alt')+"</p></div>");
		var tooltip = $("#"+name+i);

		$(this).removeAttr("alt").mouseover(function(){
				tooltip.css({opacity:0.8, display:"none"}).fadeIn(400);
		}).mousemove(function(kmouse){
				tooltip.css({left:kmouse.pageX+15, top:kmouse.pageY+15});
		}).mouseout(function(){
				tooltip.fadeOut(100);
		});
	});
}