
//Cargar de manera automatica los datos registrados
function loadTable() {
    $.ajax({
        url: 'http://localhost:9000/security/user',
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (items) {
        var registros = "";
        items.forEach(function (item, index, array) {            

            registros +=`<tr>
                            <td>`+item.userName+`</td>
                            <td>`+item.userPassword+`</td>   
                            <td>`+item.personaId.primerNombre+` `+item.personaId.segundoNombre+` `+item.personaId.primerApellido+` `+item.personaId.segundoNombre+` `+`</td>
                            <td>`+item.rolId.nombre+`</td>   
                            <td>`+(item.estado==true?'Activo':'Inactivo')+`</td>
                            <td>
                                <img src="../../assets/icon/edit.svg" alt="" onclick="findById(`+item.id+`)">
                            </td>
                            <td>
                                <img src="../../assets/icon/trash.svg" alt="" onclick="Eliminar(`+item.id+`)">
                            </td>
                        </tr>`;
        })
        $("#dataResult").html(registros);
        Limpiar();    
    })
}

// Busqueda por id
function findById(id) {
    $.ajax({
        url: 'http://localhost:9000/security/user/' + id,
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (item) {
        $("#id").val(item.id)        
        $("#userName").val(item.userName)
        $("#userPassword").val(item.userPassword)
        $("#personaId").val(item.personaId.id)
        $("#rolId").val(item.rolId.id)
        $("#estado").val((item.estado==true? 1:0))
    })
}

//Accion de adicionar un registro
function Agregar(){
    $.ajax({
        url: 'http://localhost:9000/security/user',
        data: JSON.stringify({
            userName: $("#userName").val(),
            userPassword: $("#userPassword").val(),
            personaId: {
                id:$("#personaId").val()
            },
            rolId: {
                id:$("#rolId").val()
            },
            estado: parseInt($("#estado").val())
        }),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (result) {
        loadTable();        
    })
}


function Modificar(){    
    $.ajax({
        url: 'http://localhost:9000/security/user/'+parseInt($("#id").val()),
        data: JSON.stringify({
            userName: $("#userName").val(),
            userPassword: $("#userPassword").val(),
            personaId: {
                id:$("#personaId").val()
            },
            rolId: {
                id:$("#rolId").val()
            },
            estado: parseInt($("#estado").val())
        }),
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (result) {
        loadTable();        
    })
}


function Eliminar(id){    
    $.ajax({
        url: 'http://localhost:9000/security/user/'+id,
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (result) {
        loadTable();
    })
}

function Limpiar(){
    $("#id").val("");    
    $("#userName").val("");
    $("#userPassword").val("");
    $("#personaId").val("");
    $("#rolId").val("");
    $("#estado").val("");
}


//Listar roles
function loadTableRol() {
    $.ajax({
        url: 'http://localhost:9000/security/rol',
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (items) {
        var registros =`<option value="">--SELECCIONAR--</option>`;
        items.forEach(function (item, index, array) {            

            registros +=`<option value="`+item.id+`">`+item.nombre+`</option>`;
        })
        $("#rolId").html(registros);        
    })
}

//Listar personas
function loadTablePerson() {
    $.ajax({
        url: 'http://localhost:9000/security/person',
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (items) {
        var registros =`<option value="">--SELECCIONAR--</option>`;
        items.forEach(function (item, index, array) {            

            registros +=`<option value="`+item.id+`">`+item.primerNombre+` `+item.segundoNombre+` `+item.primerApellido+` `+item.segundoApellido+`</option>`;
        })
        $("#personaId").html(registros);        
    })
}
