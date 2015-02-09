$(document).on("deviceready", function(){
	alert("Mueve tu Teléfono");
// Definimos una función para que compruebe la posicion del telefono cada 1 segundo
	var acel = setInterval(function() {
	navigator.accelerometer.getCurrentAcceleration(verificar, null);
	}, 1000);
});

// Verificamos si se ha encontrado un punto en los valores
function verificar(acel){
	var x = acel.x.toFixed(2);
	var y = acel.y.toFixed(2);
	var z = acel.z.toFixed(2);
	if ((x >= 5 && x <= 10) && (y >= 0 && y <= 3) && (z >= 5 && z <= 9)) {
		alert("Encontraste la posición");
		navigator.notification.beep(500);
		$.mobile.loading( "hide");
	};
}