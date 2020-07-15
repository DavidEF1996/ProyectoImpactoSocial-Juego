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
}

Paredes.prototype = Object.create(Kinetic.Rect.prototype);