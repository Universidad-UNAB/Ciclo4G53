
//Cargar de manera automatica los datos registrados
function loadTable() {
    $.ajax({
        url: 'http://localhost:9000/security/view',
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (items) {
        var registros = "";
        items.forEach(function (item, index, array) {            

            registros +=`<tr>
                            <td>`+item.codigo+`</td>
                            <td>`+item.nombre+`</td> 
                            <td>`+item.ruta+`</td>
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
        url: 'http://localhost:9000/security/view/' + id,
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (item) {
        $("#id").val(item.id)        
        $("#codigo").val(item.codigo)
        $("#nombre").val(item.nombre)
        $("#ruta").val(item.ruta)
        $("#estado").val((item.estado==true? 1:0))
    })
}

//Accion de adicionar un registro
function Agregar(){
    $.ajax({
        url: 'http://localhost:9000/security/view',
        data: JSON.stringify({
            codigo: $("#codigo").val(),
            nombre: $("#nombre").val(),
            ruta: $("#ruta").val(),
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
        url: 'http://localhost:9000/security/view/'+parseInt($("#id").val()),
        data: JSON.stringify({
            codigo: $("#codigo").val(),
            nombre: $("#nombre").val(),
            ruta: $("#ruta").val(),
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
        url: 'http://localhost:9000/security/view/'+id,
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
    $("#codigo").val("");
    $("#nombre").val("");
    $("#ruta").val("");
    $("#estado").val("");
}
