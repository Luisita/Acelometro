
$(document).on("deviceready", function(){
  alert("Mueve tu teléfono");
  setInterval(function(){ navigator.accelerometer.getCurrentAcceleration(onSuccess, onError)},1000);
});

function onSuccess(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    }

    // onError: Failed to get the acceleration
    //
    function onError() {
        alert('onError!');
    }
