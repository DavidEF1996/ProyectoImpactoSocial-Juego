function Paredes(x,y) {
    Kinetic.Rect.call(this);
    this.setWidth(60);
    this.setHeight(60);
    this.setX(x);
    this.setY(y);
    this.contador = 0;
    this.setFill('blue');
    this.aleatorio = function (inferior, superior) {
        var posibilidades = superior - inferior;
        var random = Math.random() * posibilidades;
        random = Math.floor(random);
        return parseInt(inferior) + random;
    }
    this.mover = function(){
        this.contador++;
        this.setY(this.getY()+Math.sin(this.contador * Math.PI/75)*2);
}

     this.caminar = function () {
        this.move(velox,0);
        //console.log("comienza es ",this.getY());
            if(this.getX()> this.limiteDer) this.move(this.limiteDer - this.getX(),0);
    }
    this.retroceder = function () {
        this.move(-(velox),0);
            if(this.getX()< 0) this.move(-this.getX(),0);
    }
    this.arriba = function () {
        this.move (0,-(veloy));
        // console.log("Arriba es ",this.getY());
            if (this.getY()< 0) this.move(0,-this.getY());

    }
    this.abajo = function () {
        this.move(0, veloy);
            if (this.getY() > this.limiteTope)  this.move(0,-7);

    }

    this.soltar = function(){

        this.move(0,1);
        console.log('esta llegando');
    }
}



Paredes.prototype = Object.create(Kinetic.Rect.prototype);