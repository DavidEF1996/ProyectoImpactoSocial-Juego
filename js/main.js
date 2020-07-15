var stage, fondo;
var keyboard = {};
var intervalo;
var  personaje;

stage = new Kinetic.Stage(
    {
        container:'game',
        width:490,
        height:560,

    }
);

function primerEscenario() {
    fondo = new Kinetic.Layer();
    personaje = new NaveEspacial();
    personaje.setX(0);
    personaje.setY(490);

    personaje.limiteDer = stage.getWidth()-personaje.getWidth();
    personaje.limiteTope = stage.getHeight()-personaje.getHeight();

    fondo.add(personaje);
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
addKeyBoardEvents();
primerEscenario();

function frameLoop() {

    moverPersonaje();
    stage.draw();

}
