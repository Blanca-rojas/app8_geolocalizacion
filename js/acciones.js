//JavaScript Document

$(document).ready(function (e){
	document.addEventListener("deviceready",function(){
		
		$('#Izquierda').on("swipeleft",function(){
			navigator.notification. alert("Deslizo a la izquirda",function(){"Aplicacion ","Aceptar"});
		});
		
		$('#derecha').on("swiperight",function(){
			navigator.notification.confirm("¿Que quieres hacer?",function(opt){
				switch(opt)
				{
					case 1:
					navigator.notification.beep(1);
					break;
					
					case2:
					navigator.notification.vibrate(1000);
					break;
				}
				
			},"Aplicacion ","Beep,Vibrar,Cancelar");
		});
	},false);
});