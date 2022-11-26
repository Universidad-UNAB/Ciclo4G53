// Consultar toda la data de la API
function findAll() {
    $.ajax({
        url: 'http://localhost:9000/api/estate/costManagement',
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (items) {
        var registros = "";
        items.forEach(function (item, index, array) {
            registros+=`<tr>
                            <th>`+item.codigo+`</th>
                            <th>`+item.nombre+`</th>
                            <th>`+item.valorMes+`</th>
                            <th>`+item.tipoInmuebleId.nombre+`</th>
                            <th>`+(item.estado==true?'Activo':'Inactivo')+`</th>
                            <th><img src="../../asset/library/node_modules/bootstrap-icons/icons/pencil-fill.svg" alt="" onclick="findById('`+item.id+`');"></th>
                            <th><img src="../../asset/library/node_modules/bootstrap-icons/icons/trash.svg" alt="" onclick="deleteById('`+item.id+`');"></th>                                    
                        </tr>`;
        })
        $("#dataResult").html(registros);
        ClearData();
    })
}

function findById(id) {
    $.ajax({
        url: 'http://localhost:9000/api/estate/costManagement/' + id,
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (item) {
        $("#id").val(item.id)
        $("#codigo").val(item.codigo)
        $("#nombre").val(item.nombre)
        $("#valorMes").val(item.valorMes)
        $("#tipoInmuebleId").val(item.tipoInmuebleId.id)
        $("#estado").val(item.estado==true?1:0)
    })
}

function AddData() {
    $.ajax({
        url: 'http://localhost:9000/api/estate/costManagement',
        data: JSON.stringify({
            codigo: $("#codigo").val(),
            nombre: $("#nombre").val(),
            valorMes: $("#valorMes").val(),  
            tipoInmuebleId: {
                id:$("#tipoInmuebleId").val()
            },
            estado: parseInt($("#estado").val())
        }),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (result) {
        findAll();
    })
}

function UpdateData() {
    $.ajax({
        url: 'http://localhost:9000/api/estate/costManagement/'+$("#id").val(),
        data: JSON.stringify({
            codigo: $("#codigo").val(),
            nombre: $("#nombre").val(),
            valorMes: $("#valorMes").val(),   
            tipoInmuebleId: {
                id:$("#tipoInmuebleId").val()
            },
            estado: parseInt($("#estado").val())
        }),
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (result) {
        findAll();
    })
}

function deleteById(id) {
    $.ajax({
        url: 'http://localhost:9000/api/estate/costManagement/'+id,
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (result) {
        findAll();
    })

}

function ClearData(){
    $("#id").val("");
    $("#codigo").val("");
    $("#nombre").val("");
    $("#valorMes").val("");
    $("#tipoInmuebleId").val("");
    $("#estado").val("");
}


// Consultar toda la data de la API de Tipos Inmuebles
function listPropertyType() {
    $.ajax({
        url: 'http://localhost:9000/api/estate/propertyType',
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (items) {
        var dataList = "<option>--Seleccionar--</option>";
        items.forEach(function (item, index, array) {
            dataList+=`<option value="`+item.id+`">`+item.nombre+`</option>`;
        })
        $("#tipoInmuebleId").html(dataList);
        ClearData();
    })
}
