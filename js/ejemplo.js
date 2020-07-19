var resultado = '';
			window.onload = function() {
				document.onkeypress = mostrarInformacionTecla;
			}
			function mostrarInformacionTecla(eventoObj){
				var caracter = String.fromCharCode(eventoObj.which);

			resultado = caracter;
			console.log(resultado);
				return resultado;

			}


