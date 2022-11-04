
//Cargar de manera automatica los datos registrados
function loadTable() {
    $.ajax({
        url: 'http://localhost:9000/security/viewRol',
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (items) {
        var registros = "";
        items.forEach(function (item, index, array) {            

            registros +=`<tr>
                            <td>`+item.vistaId.nombre+`</td>   
                            <td>`+item.rolId.nombre+`</td>                               
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
        url: 'http://localhost:9000/security/viewRol/' + id,
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (item) {
        $("#id").val(item.id)        
        $("#vistaId").val(item.vistaId.id)
        $("#rolId").val(item.rolId.id)
    })
}

//Accion de adicionar un registro
function Agregar(){
    $.ajax({
        url: 'http://localhost:9000/security/viewRol',
        data: JSON.stringify({           
            vistaId: {
                id:$("#vistaId").val()
            },
            rolId: {
                id:$("#rolId").val()
            }            
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
        url: 'http://localhost:9000/security/viewRol/'+parseInt($("#id").val()),
        data: JSON.stringify({
            vistaId: {
                id:$("#vistaId").val()
            },
            rolId: {
                id:$("#rolId").val()
            }
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
        url: 'http://localhost:9000/security/viewRol/'+id,
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
    $("#vistaId").val("");
    $("#rolId").val("");    
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

//Listar vistas
function loadTableView() {
    $.ajax({
        url: 'http://localhost:9000/security/view',
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (items) {
        var registros =`<option value="">--SELECCIONAR--</option>`;
        items.forEach(function (item, index, array) {            

            registros +=`<option value="`+item.id+`">`+item.nombre+`</option>`;
        })
        $("#vistaId").html(registros);        
    })
}