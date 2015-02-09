
$(document).on("deviceready", function(){
  alert("Mueve tu teléfono");
  setInterval(function(){ navigator.accelerometer.getCurrentAcceleration(onSuccess, onError)},1500);
});

function onSuccess(acceleration) {
	var x = acceleration.x;
	var y = acceleration.y;
	var z = acceleration.z;

	if((x>-2 && x<2) && (y>4 && y<9) && (z>5 && z<9)){
		alert('X: ' + acceleration.x + '\n' +
              'Y: ' + acceleration.y + '\n' +
              'Z: ' + acceleration.z + '\n' );
	}

        
}

    // onError: Fallado la aceleración
    //
    function onError() {
        alert('Fallo aceleración');
    }
