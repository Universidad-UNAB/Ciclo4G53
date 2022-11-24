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


// Consultar toda la data de la API de Tipos Inmuebles
function listDepartment() {
    $.ajax({
        url: 'http://localhost:9000/api/estate/department',
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (items) {
        var dataList = "<option>--Seleccionar--</option>";
        items.forEach(function (item, index, array) {
            dataList+=`<option value="`+item.id+`">`+item.nombre+`</option>`;
        })
        $("#departamentoId").html(dataList);
        ClearData();
    })
}
