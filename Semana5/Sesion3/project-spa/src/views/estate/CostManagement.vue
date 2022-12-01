<template>
    <div class="costManagement">
        <div class="container">
            <fieldset>
                <legend>Registro de los costos de adminsitración</legend>

                <!-- Input formulario -->
                <div class="form-group row">
                    <div class="col-xs-3">
                        <label>Código</label>
                        <input type="hidden" v-model="id">
                        <input type="text" class="form-control sizeText" v-model="codigo" placeholder="Ingresar código">

                        <label>Nombre</label>
                        <input type="text" class="form-control sizeText" v-model="nombre" placeholder="Ingresar nombre">

                        <label>Valor Mes</label>
                        <input type="number" class="form-control sizeText" v-model="valorMes"
                            placeholder="Ingresar valor del mes">

                        <label>Tipos Inmuebles</label>
                        <select class="form-select sizeText" v-model="tipoInmuebleId">
                            <!-- Aqui llega la información de la API -->
                            <option disabled :selected="true" value="">-- Seleccione --</option>
                            <option  v-for="item in listPropertyType" :key="item.id" :value="item.id">{{item.nombre}}</option>
                        </select>

                        <label>Estado</label>
                        <select class="form-select sizeText" v-model="estado">
                            <option disabled :selected="true" value="">-- Seleccione --</option>
                            <option value="1">Activo</option>
                            <option value="0">Inactivo</option>
                        </select>
                    </div>

                    <!-- botones de gestión para Agregar o Modificar -->
                    <div class="col-xs-3">
                        <br>
                        <button type="button" class="btn btn-primary" @click="addData();">Agregar</button>
                        <button type="button" class="btn btn-primary" @click="dataUpdate();">Modificar</button>
                    </div>

                    <!-- Data de salida -->
                    <div class="col-xs-3">
                        <br>
                        <table class="table table-hover">
                            <thead>
                                <tr class="table-primary">
                                    <th>Código</th>
                                    <td>Nombre</td>
                                    <td>Valor Mes</td>
                                    <td>Tipo Inmueble</td>
                                    <td>Estado</td>
                                    <td>Editar</td>
                                    <td>Eliminar</td>
                                </tr>

                            </thead>
                            <tbody id="dataResult">
                                <!-- Aqui llega la data de la API -->
                                <tr v-for="item in listData" :key="item.id">
                                    <td>{{ item.codigo }}</td>
                                    <td>{{ item.nombre }}</td>
                                    <td>{{ item.valorMes }}</td>
                                    <td>{{ item.tipoInmuebleId.nombre }}</td>                                    
                                    <td>{{ item.estado == true ? 'Activo' : 'Inactivo' }}</td>
                                    <!-- boton para obtener el id de cada registro -->
                                    <td><button @click="findByid(item.id)">➤</button></td>
                                    <td><button @click="deleteById(item.id)">➤</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </fieldset>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'CostManagement',
    data() {
        return {
            id: 0,
            codigo: '',
            nombre: '',
            valorMes:'',
            tipoInmuebleId:'',
            estado: '',
            listData: [],
            listPropertyType: []
        }
    },
    created() {
        this.loadData();
    },
    methods: {
        loadData: function () {
            axios.get('http://localhost:9000/api/estate/costManagement').then(result => {
                this.listData = result.data
            });

            axios.get('http://localhost:9000/api/estate/propertyType').then(result => {
                this.listPropertyType = result.data
            })
        },
        findByid: function (id) {
            // metodo para consutlar por el ig del boton impreso en la vista
            axios.get('http://localhost:9000/api/estate/costManagement/' + id).then(result => {
                this.id = result.data.id;
                this.codigo = result.data.codigo;
                this.nombre = result.data.nombre;
                this.valorMes = result.data.valorMes;
                this.tipoInmuebleId = result.data.tipoInmuebleId.id,
                this.estado = (result.data.estado == true ? 1 : 0);
            })
        },
        deleteById: function (id) {
            Swal.fire({
                title: '¿Desea eliminar el registro?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminaar!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Se eliminó!',
                        'Registro eliminado.',
                        'success'
                    )
                    axios.delete('http://localhost:9000/api/estate/costManagement/' + id,).then(() => {
                        this.loadData();
                        this.clearList();
                    });
                }
            })
        },
        clearList: function () {
            this.id = 0,
                this.codigo = '',
                this.nombre = '',
                this.valorMes = '',
                this.estado = '',
                this.tipoInmuebleId = ''
        },
        addData: function () {

            Swal.fire({
                title: '¿Desea guardar el registro?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Guardar',
                denyButtonText: 'No guardar',
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Swal.fire('Registro almacenado con éxito!', '', 'success')
                    let data = {
                        codigo: this.codigo,
                        nombre: this.nombre,
                        valorMes:this.valorMes,
                        tipoInmuebleId:{
                            id:this.tipoInmuebleId
                        },
                        estado: parseInt(this.estado)
                    };
                    axios.post('http://localhost:9000/api/estate/costManagement', data).then(result => {
                        if (result.data) {
                            this.loadData();
                            this.clearList();
                        }
                    });
                } else if (result.isDenied) {
                    Swal.fire('Sin guardar cambios', '', 'info')
                }
            })


        },
        dataUpdate: function () {
            Swal.fire({
                title: '¿Desea modificar el registro?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Modificar',
                denyButtonText: 'No modificar',
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Swal.fire('Registro se almacenado con éxito!', '', 'success')
                    let data = {
                        id: this.id,
                        codigo: this.codigo,
                        nombre: this.nombre,
                        valorMes:this.valorMes,
                        tipoInmuebleId:{
                            id:this.tipoInmuebleId
                        },
                        estado: parseInt(this.estado)
                    };

                    axios.put('http://localhost:9000/api/estate/costManagement/' + this.id, data).then(result => {
                        if (result.data) {                            
                            this.loadData();
                            this.clearList();
                        }
                    });
                } else if (result.isDenied) {
                    Swal.fire('Sin guardar cambios', '', 'info')
                }
            })
        }
    }
}
</script>
