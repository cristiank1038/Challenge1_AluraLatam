function encriptar(){
    var texto= document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado=texto.replace(/e/igm,"enter");
    var txtCifrado=txtCifrado.replace(/o/igm,"ober");
    var txtCifrado=txtCifrado.replace(/i/igm,"imes");
    var txtCifrado=txtCifrado.replace(/u/igm,"ufat");
    var txtCifrado=txtCifrado.replace(/a/igm,"ai");

    document.getElementById("imDer").style.display= "none";
    document.getElementById("texto").style.display= "none";
    document.getElementById("texto2").innerHTML= txtCifrado;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";

}


function desencriptar(){
    var texto= document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado=texto.replace(/ai/igm,"a");
    var txtCifrado=txtCifrado.replace(/ufat/igm,"u");
    var txtCifrado=txtCifrado.replace(/imes/igm,"i");
    var txtCifrado=txtCifrado.replace(/ober/igm,"o");
    var txtCifrado=txtCifrado.replace(/enter/igm,"e");

    document.getElementById("imDer").style.display= "none";
    document.getElementById("texto").style.display= "none";
    document.getElementById("texto2").innerHTML= txtCifrado;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";

}
function copiar() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand('copy');
    alert("Copiado");
}