
//Cargar de manera automatica los datos registrados
function loadTable() {
    $.ajax({
        url: 'http://localhost:9000/security/person',
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (items) {
        var registros = "";
        items.forEach(function (item, index, array) {
            //registros += "<tr class='table-success'><td><a href='#' onclick='findById(" + item.id + ")'>" + item.id + "</a></td><td>" + item.codigo + "</td></td><td>" + item.descripcion + "</td></tr>";

            registros +=`<tr>
                            <td>`+item.tipoDocumento+'-'+item.documento+`</td>
                            <td>`+item.primerNombre+' '+item.segundoNombre+' '+item.primerApellido+' '+item.primerApellido+`</td>
                            <td>`+item.correo+`</td>
                            <td>`+item.celular+`</td>
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
        url: 'http://localhost:9000/security/person/' + id,
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (item) {
        $("#id").val(item.id)
        $("#tipoDocumento").val(item.tipoDocumento)
        $("#documento").val(item.documento)
        $("#primerNombre").val(item.primerNombre)
        $("#segundoNombre").val(item.segundoNombre)
        $("#primerApellido").val(item.primerApellido)
        $("#segundoApellido").val(item.segundoApellido)
        $("#correo").val(item.correo)
        $("#celular").val(item.celular)
        $("#estado").val((item.estado==true? 1:0))
    })
}

//Accion de adicionar un registro
function Agregar(){
    $.ajax({
        url: 'http://localhost:9000/security/person',
        data: JSON.stringify({
            tipoDocumento: $("#tipoDocumento").val(),
            documento: $("#documento").val(),
            primerNombre: $("#primerNombre").val(),
            segundoNombre: $("#segundoNombre").val(),
            primerApellido: $("#primerApellido").val(),
            segundoApellido: $("#segundoApellido").val(),
            correo: $("#correo").val(),
            celular: $("#celular").val(),
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
        url: 'http://localhost:9000/security/person/'+parseInt($("#id").val()),
        data: JSON.stringify({
            tipoDocumento: $("#tipoDocumento").val(),
            documento: $("#documento").val(),
            primerNombre: $("#primerNombre").val(),
            segundoNombre: $("#segundoNombre").val(),
            primerApellido: $("#primerApellido").val(),
            segundoApellido: $("#segundoApellido").val(),
            correo: $("#correo").val(),
            celular: $("#celular").val(),
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
        url: 'http://localhost:9000/security/person/'+id,
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
    $("#tipoDocumento").val("");
    $("#documento").val("");
    $("#primerNombre").val("");
    $("#segundoNombre").val("");
    $("#primerApellido").val("");
    $("#segundoApellido").val("");
    $("#correo").val("");
    $("#celular").val("");
    $("#estado").val("");
}
