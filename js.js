Array.prototype.mezclar= function() {
    var n=this.length;
    while(n--)
    {
        var i=Math.floor(n*Math.random());
        var tmp =this[i];
        this[i]=this[n];
        this[n]=tmp;
    }
    return this;
}
function cambiaClase(elem,cls){
    var nElem=elem.length;
    var nCls=cls.length;
    var elemento;
    cls.mezclar();
    for(var i=0;i<nElem;i++)
    {
        document.getElementById(elem[i]).setAttribute("class",cls[i%nCls]);
    }
}

/*En el window.onload*/
//Ejemplo1
var elementos=["cuadrouno","cuadrodos","cuadrotres","cuadrocuatro"];
var classes=["color1","color2","color3","color4","color5","color6","color7","color8"];
cambiaClase(elementos,classes);
setInterval(function(){cambiaClase(elementos,classes);},1500);

//Ejemplo2
var elementos2=["cuadroa","cuadrob","cuadroc","cuadrod","cuadroe","cuadrof","cuadrog"];
var classes2=["color1","color3","color8"];
cambiaClase(elementos2,classes2);
setInterval(function(){cambiaClase(elementos2,classes2);},2500);
