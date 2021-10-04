var tematicas = function (tematica)
{
    switch(tematica)
    {
        case 'a': 
            for(let i = 1; i <= 3; i++)
            {
                document.getElementById("imagen"+i).src = "img/navidad"+i+".jpg";
            }
            document.getElementById("tipoFont").innerHTML = '<option value="Brush Script MT, Brush Script Std, cursive">Brush Script MT, Brush Script Std, cursive</option>';
           
            document.getElementById("rNombre").style.fontFamily = "Brush Script MT, Brush Script Std, cursive"; 
            document.getElementById("rTitulo").style.fontFamily = "Brush Script MT, Brush Script Std, cursive"; 
            document.getElementById("rSubtitulo").style.fontFamily = "Brush Script MT, Brush Script Std, cursive"; 
            document.getElementById("rMensaje").style.fontFamily = "Brush Script MT, Brush Script Std, cursive"; 
            break;
        case 'b': 
        for(let i = 1; i <= 3; i++)
            {
                document.getElementById("imagen"+i).src = "img/muertos"+i+".jpg";
            }
            document.getElementById("tipoFont").innerHTML = '<option value="Georgia, serif">Georgia, serif</option>';
           
            document.getElementById("rNombre").style.fontFamily = "Georgia, serif"; 
            document.getElementById("rTitulo").style.fontFamily = "Georgia, serif"; 
            document.getElementById("rSubtitulo").style.fontFamily = "Georgia, serif"; 
            document.getElementById("rMensaje").style.fontFamily = "Georgia, serif"; 
            break;
        case 'c':
            for(let i = 1; i <= 3; i++)
            {
                document.getElementById("imagen"+i).src = "img/valentin"+i+".jpg";
            }
            document.getElementById("tipoFont").innerHTML = '<option value="Courier New, monospace">Courier New, monospace</option>';
           
            document.getElementById("rNombre").style.fontFamily = "Courier New, monospace"; 
            document.getElementById("rTitulo").style.fontFamily = "Courier New, monospace"; 
            document.getElementById("rSubtitulo").style.fontFamily = "Courier New, monospace"; 
            document.getElementById("rMensaje").style.fontFamily = "Courier New, monospace"; 
            break;
    }
}

var colorFondo = function ()
{
    var color = document.getElementById("backColor").value;
    
    document.getElementById("colorFondo").style.backgroundColor = color; 
}

var marcos = function (marco)
{
    document.getElementById("colorFondo").src = "img/"+marco+".png"; 
}

var imagenes = function (numImagen)
{
    var src = document.getElementById(numImagen).getAttribute('src');

    document.getElementById("resultado").style.background = "url('"+src+"') no-repeat ";
    document.getElementById("resultado").style.backgroundSize = "cover"; 
    document.getElementById("resultado").style.backgroundPosition = "center center";
    
}

var textos = function ()
{
    var nombre = document.getElementById("nombrePersona").value; 
    var titulo = document.getElementById("titulo").value; 
    var subtitulo = document.getElementById("subtitulo").value; 
    var mensaje = document.getElementById("mensaje").value; 

    document.getElementById("rNombre").innerHTML = nombre; 
    document.getElementById("rTitulo").innerHTML = titulo; 
    document.getElementById("rSubtitulo").innerHTML = subtitulo; 
    document.getElementById("rMensaje").innerHTML = mensaje;
}

var colorTexto = function ()
{
    var colorNombre = document.getElementById("colorNombre").value; 
    var colorTitulo = document.getElementById("colorTitulo").value; 
    var colorSubtitulo = document.getElementById("colorSubtitulo").value;
    var colorMensaje = document.getElementById("colorMensaje").value; 

    document.getElementById("rNombre").style.color = colorNombre; 
    document.getElementById("rTitulo").style.color = colorTitulo; 
    document.getElementById("rSubtitulo").style.color = colorSubtitulo; 
    document.getElementById("rMensaje").style.color = colorMensaje; 
}







var mostrar = function ()
{
    let tarjeta = document.getElementById("tarjeta").innerHTML; 
    console.log(tarjeta); 
    localStorage.setItem('tarjeta', tarjeta);

    
    window.open("resultadoTarjeta.html", "Tarjeta", "width=533, height=800, scrollbars=NO")
}
