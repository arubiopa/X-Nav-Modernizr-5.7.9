window.addEventListener('load', prueba, false);

function prueba(){
    /* Inicializamos el canvas */
	var theCanvas = document.getElementById('canvas');
  if(Modernizr.canvas){
    theCanvas.innerHTML ="va canvas"
  }else{
    theCanvas.innerHTML ="no va canvas"
  }

  var geolocation = document.getElementById('geolocation');
    if(Modernizr.geolocation){
      geolocation.innerHTML ="hay localizacion"
    }else{
      geolocation.innerHTML ="no hay localizacion"
    }

	var video = document.getElementById('video');
    if(Modernizr.video){
      video.innerHTML ="hay video"
    }else{
      video.innerHTML ="no hay video"
    }

	var almacenamiento = document.getElementById('almacenamiento');
    if(Modernizr.localstorage){
      almacenamiento.innerHTML ="hay almacenamiento"
    }else{
      almacenamiento.innerHTML ="no hay almacenamiento"
    }

	var offline = document.getElementById('offline');
    if(Modernizr.applicationcache){
      offline.innerHTML ="hay offline"
    }else{
      offline.innerHTML ="no hay offline"
    }
}
