// Consultar toda la data de la API de Tipos Inmuebles
let usuario;
function loginAccess() {
    $.ajax({
        url: 'http://localhost:9000/api/estate/user',
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (items) {       
        let login=false;         
        items.forEach(function (item, index, array) {
            if($("#userName").val()==item.usuario && $("#userPassword").val()==item.contrasenia && item.estado ==true){
                login = true;
                usuario = item.usuario;
            }
        })

        if(login==true){
            alert("Bienvenido "+usuario);
            location.href= "./view/dashboard.html";
        }else{
            alert("Usuario no autorizado.");
            dataClear();
        }
        
    })
}

function CerrarSesion(){
    alert("Hasta pronto ");
    location.href= "../index.html";
}

function dataClear() {
    $("#userName").val("");
    $("#userPassword").val("");    
}
