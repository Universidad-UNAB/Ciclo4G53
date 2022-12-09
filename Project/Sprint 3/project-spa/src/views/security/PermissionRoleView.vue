<template>
    <div class="PermissionRoleView">
        <div class="container">
            <fieldset>
                <legend>Asignar Permisos a los Roles</legend>

                <!-- Input formulario -->
                <div class="form-group row">
                    <div class="col-xs-3">                        
                        <input type="hidden" v-model="id">

                        <label>Roles</label>
                        <select class="form-select sizeText" v-model="rolId">
                            <!-- Aqui llega la información de la API -->
                            <option disabled :selected="true" value="">-- Seleccione --</option>
                            <option  v-for="item in listRole" :key="item.id" :value="item.id">{{item.nombre}}</option>
                        </select>

                        <label>Permisos</label>
                        <select class="form-select sizeText" v-model="permisoId">
                            <!-- Aqui llega la información de la API -->
                            <option disabled :selected="true" value="">-- Seleccione --</option>
                            <option  v-for="item in listPermission" :key="item.id" :value="item.id">{{item.nombre}}</option>
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
                                    <td>Rol</td>
                                    <td>Permiso</td>
                                    <td>Estado</td>
                                    <td>Editar</td>
                                    <td>Eliminar</td>
                                </tr>

                            </thead>
                            <tbody id="dataResult">
                                <!-- Aqui llega la data de la API -->
                                <tr v-for="item in listData" :key="item.id">
                                    <td>{{ item.rolId.nombre }}</td>
                                    <td>{{ item.permisoId.nombre }}</td>                                    
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
    name: 'PermissionRoleView',
    data() {
        return {
            id: 0,            
            rolId:'',
            permisoId:'',
            estado: '',
            listData: [],
            listRole: [],
            listPermission: []
        }
    },
    created() {
        this.loadData();
    },
    methods: {
        loadData: function () {
            axios.get('http://132.145.204.101:8080/api/security/rolePermission').then(result => {
                this.listData = result.data
            });

            axios.get('http://132.145.204.101:8080/api/security/permission').then(result => {
                this.listPermission = result.data
            });

            axios.get('http://132.145.204.101:8080/api/security/role').then(result => {
                this.listRole = result.data
            });
        },
        findByid: function (id) {
            // metodo para consutlar por el ig del boton impreso en la vista
            axios.get('http://132.145.204.101:8080/api/security/rolePermission/' + id).then(result => {
                this.id = result.data.id;                
                this.rolId = result.data.rolId.id,
                this.permisoIdId = result.data.permisoId.id,
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
                    axios.delete('http://132.145.204.101:8080/api/security/rolePermission/' + id,).then(() => {
                        this.loadData();
                        this.clearList();
                    });
                }
            })
        },
        clearList: function () {
            this.id = 0,
                this.rolId = '',
                this.permisoId = '',                
                this.estado = ''                
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
                        permisoId:{
                            id:this.permisoId
                        },
                        rolId:{
                            id:this.rolId
                        },
                        estado: parseInt(this.estado)
                    };
                    axios.post('http://132.145.204.101:8080/api/security/rolePermission', data).then(result => {
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
                        permisoId:{
                            id:this.permisoId
                        },
                        rolId:{
                            id:this.rolId
                        },
                        estado: parseInt(this.estado)
                    };

                    axios.put('http://132.145.204.101:8080/api/security/rolePermission/' + this.id, data).then(result => {
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
