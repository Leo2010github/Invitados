var Invitados = [];
var NInvitado;
var InvitadosO;
var BuInvitado = document.getElementById("BU").value;
var Encontro;
function Enviar(){
    var NInvitado = document.getElementById("E").value;
    Invitados.push(" " + NInvitado);
    console.log(Invitados)
}
function Ordenar(){
    InvitadosO = Invitados.sort();
    document.getElementById("LO").innerHTML = InvitadosO;
    console.log(InvitadosO);
}
function Mostrar(){
    document.getElementById("MO").innerHTML = Invitados;
}
function Buscar(){
    for (var i = 0; i < Invitados.length; i++) {
        if (BuInvitado == Invitados[i]) {
            Encontro = Encontro + 1;
        }
    }
    document.getElementById("EBU").innerHTML =  BuInvitado + " esta " + Encontro + " veces en la lista" ;
    console.log(BuInvitado + " esta " + Encontro + " veces en la lista" );
}