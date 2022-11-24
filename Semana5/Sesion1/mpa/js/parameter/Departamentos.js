// Consultar toda la data de la API
function findAll() {
    $.ajax({
        url: 'http://localhost:9000/api/estate/department',
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
        url: 'http://localhost:9000/api/estate/department/' + id,
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (item) {
        $("#id").val(item.id)
        $("#codigo").val(item.codigo)
        $("#nombre").val(item.nombre)        
        $("#estado").val(item.estado==true?1:0)
    })
}

function AddData() {
    $.ajax({
        url: 'http://localhost:9000/api/estate/department',
        data: JSON.stringify({
            codigo: $("#codigo").val(),
            nombre: $("#nombre").val(),
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
        url: 'http://localhost:9000/api/estate/department/'+$("#id").val(),
        data: JSON.stringify({
            codigo: $("#codigo").val(),
            nombre: $("#nombre").val(),            
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
        url: 'http://localhost:9000/api/estate/department/'+id,
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
    $("#estado").val("");
}