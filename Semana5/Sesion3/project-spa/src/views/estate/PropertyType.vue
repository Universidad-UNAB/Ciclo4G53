<template>
    <div class="propertyType">
        <div class="container">
            <form>
                <fieldset>
                    <legend>Registro los tipos de inmuebles</legend>

                    <!-- Input formulario -->
                    <div class="form-group row">
                        <div class="col-xs-3">
                            <label>Código</label>
                            <input type="hidden" v-model="id">
                            <input type="text" class="form-control sizeText" v-model="codigo"
                                placeholder="Ingresar código">

                            <label>Nombre</label>
                            <input type="text" class="form-control sizeText" v-model="nombre"
                                placeholder="Ingresar nombre">

                            <label>Descripción</label>
                            <input type="text" class="form-control sizeText" v-model="descripcion"
                                placeholder="Ingresar valor del mes">

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
                                        <td>Descripción</td>
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
                                        <td>{{ item.descripcion }}</td>
                                        <td>{{ item.estado == true ? 'Activo' : 'Inactivo' }}</td>
                                        <!-- boton para obtener el id de cada registro -->
                                        <td><img src="../../../node_modules/bootstrap-icons/icons/pencil-square.svg" @click="findByid(item.id)"></td>
                                        <td><img src="../../../node_modules/bootstrap-icons/icons/trash2-fill.svg" @click="deleteById(item.id)"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'PropertyTypeView',
    data() {
        return {
            id: 0,
            codigo: '',
            descripcion: '',
            estado: '',
            listData: []
        }
    },
    created() {
        this.loadData();       
    },
    methods: {
        loadData: function () {
            axios.get('http://localhost:9000/api/estate/propertyType').then(result => {
                this.listData = result.data
            })
        },
        findByid: function (id) {
            // metodo para consutlar por el ig del boton impreso en la vista
            axios.get('http://localhost:9000/api/estate/propertyType/' + id).then(result => {
                this.id = result.data.id;
                this.codigo = result.data.codigo;
                this.nombre = result.data.nombre;
                this.descripcion = result.data.descripcion;               
                this.estado = (result.data.estado == true ? 1 : 0);
            })
        },
        deleteById: function (id) {
            axios.delete('http://localhost:9000/api/estate/propertyType/' + id,).then(() => {
                alert('El registro se eliminó de forma correcta.');
                this.loadData();
                this.clearList();
            });
        },
        clearList: function () {
            this.id = 0,
                this.codigo = '',
                this.nombre = '',
                this.descripcion = '',                
                this.estado = '',
                this.listData = []
        },
        addData: function () {
            let data = {
                codigo: this.codigo,
                nombre: this.nombre,
                descripcion: this.descripcion,                
                estado: parseInt(this.estado)
            };
            axios.post('http://localhost:9000/api/estate/propertyType', data).then(result => {
                if (result.data) {
                    alert('El registro se guardó de forma correcta.');
                    this.loadData();
                    this.clearList();
                }
            });

        },
        dataUpdate: function () {
            let data = {
                id: this.id,
                codigo: this.codigo,
                nombre: this.nombre,
                descripcion: this.descripcion, 
                estado: parseInt(this.estado)
            };

            axios.put('http://localhost:9000/api/estate/propertyType/' + this.id, data).then(result => {
                if (result.data) {
                    alert('El registro se modificó de forma correcta.');
                    this.loadData();
                    this.clearList();
                }
            });

        }
    }
}
</script>
