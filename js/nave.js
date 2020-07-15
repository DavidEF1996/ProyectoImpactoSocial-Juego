function NaveEspacial() {
    Kinetic.Rect.call(this);
    this.setWidth(40);
    this.setHeight(70);
    this.vx =7;
    this.vy = 7;
    this.limiteDer = 0;
    this.limiteTope  = 0;
    this.direccion = 1;
    this.contador = 0;
    this.setFill('red');

    this.caminar = function () {
        this.move(7,0);

        console.log("comienza es ",this.getY());
        if(this.getX()> this.limiteDer) this.move(this.limiteDer - this.getX(),0);
    }
    this.retroceder = function () {
         this.move(-7,0);

        if(this.getX()< 0) this.move(-this.getX(),0);
    }


    this.arriba = function () {
        this.move (0,-7);

          console.log("Arriba es ",this.getY());
      if (this.getY()< 0) this.move(0,-this.getY());

    }


    this.abajo = function () {
        this.move(0, 7);


        if (this.getY() > this.limiteTope)  this.move(0,-7);




    }

    this.saltar = function () {

    }
    this.aplicarGravedad = function () {

    }
}
NaveEspacial.prototype = Object.create(Kinetic.Rect.prototype);