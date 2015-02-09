$(document).on("deviceready", function(){
	$.mobile.loading( "show", {
		text: "Esperando posición",
		textVisible: true,
		theme: "a",
		html: ""
	});
	// Definimos una función para que compruebe la posicion del telefono cada 1 segundo
	var acel = setInterval(function() {
	navigator.accelerometer.getCurrentAcceleration(Aceleracion, null);
	}, 1000);
});
// Verificamos si se ha encontrado un punto en los valores
function Aceleracion(acel){
	var x = acel.x.toFixed(2);
	var y = acel.y.toFixed(2);
	var z = acel.z.toFixed(2);
	if ((x >= 9 && x <= 10) && (y >= 0 && y <= 1) && (z >= 5 && z <= 6)) {
		alert("Posición: \n x="+x+"\n y="+y+"\n z="+z);
		navigator.notification.beep(500);
		$.mobile.loading( "hide");
	};
}