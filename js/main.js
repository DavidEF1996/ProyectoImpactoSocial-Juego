var stage, fondo, grupoAssets;
var keyboard = {};
var intervalo;
var  personaje;

grupoAssets = new Kinetic.Group({
    x:0,
    y:0,
});

stage = new Kinetic.Stage(
    {
        container:'game',
        width:490,
        height:560,

    }
);

function primerEscenario() {
    fondo = new Kinetic.Layer();

    grupoAssets.add(new Paredes(200, stage.getHeight()-250) );
    grupoAssets.add(new Paredes(280, stage.getHeight()-600) );
    grupoAssets.add(new Paredes(390, stage.getHeight()-200) );

    var piso = new Plataforma(0, stage.getHeight()-7);
    piso.setWidth(stage.getWidth()*2);
    grupoAssets.add(piso);

    personaje = new NaveEspacial();
    personaje.setX(0);
    personaje.setY(490);

    personaje.limiteDer = stage.getWidth()-personaje.getWidth();
    personaje.limiteTope = stage.getHeight()-personaje.getHeight();

    fondo.add(personaje);
    fondo.add(grupoAssets);
    stage.add(fondo);
    intervalo = setInterval(frameLoop,1000/60);
}

function moverPersonaje(){

    if(Keyboard[37]){
        personaje.retroceder();
    }
    if(Keyboard[39]){
        personaje.caminar();
    }
    if(Keyboard[38]){
        personaje.arriba();
    }
    if(Keyboard[40]){
        personaje.abajo();
    }

}

function addKeyBoardEvents(){

    addEvent(document, "keydown", function(e){
        Keyboard[e.keyCode] = true;
    });

    addEvent(document, "keyup", function(e){
        Keyboard[e.keyCode] = false;
    });


    function addEvent(element,eventName,func){
        if(element.addEventListener){
            element.addEventListener(eventName,func,false);

        }else if (element.attachEvent){
            element.attachEvent(eventName,func);
        }
    }
}

function hit(a,b){
	var hit = false;
	//Colsiones horizontales
	if(b.getX() + b.getWidth() >= a.getX() && b.getX() < a.getX() + a.getWidth()){
		//Colisiones verticales
		if(b.getY() + b.getHeight() >= a.getY() && b.getY() < a.getY() + a.getHeight())
			hit = true;
	}
	//Colisión de a con b
	if(b.getX() <= a.getX() && b.getX() + b.getWidth() >= a.getX() + a.getWidth()){
		if(b.getY() <= a.getY() && b.getY() + b.getHeight() >= a.getY() + a.getHeight())
			hit = true;
	}
	//Colisión b con a
	if(a.getX() <= b.getX() && a.getX() + a.getWidth() >= b.getX() + b.getWidth()){
		if(a.getY() <= b.getY() && a.getY() + a.getHeight() >= b.getY() + b.getHeight())
			hit = true;
	}
	return hit;
}
function moverObstaculos() {
    var obstaculos = grupoAssets.children;
    for (i in obstaculos){
        var obstaculo  = obstaculos[i];
          if(obstaculo instanceof Paredes)
            obstaculo.mover();

    }
}

addKeyBoardEvents();
primerEscenario();

function frameLoop() {

    moverPersonaje();
    moverObstaculos();
    stage.draw();

}
