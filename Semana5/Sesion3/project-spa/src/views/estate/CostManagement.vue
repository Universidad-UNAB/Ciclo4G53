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
                        </select>

                        <label>Estado</label>
                        <select class="form-select sizeText" v-model="estado">
                            <option>--Seleccionar--</option>
                            <option value="1">Activo</option>
                            <option value="0">Inactivo</option>
                        </select>
                    </div>

                    <!-- botones de gestión para Agregar o Modificar -->
                    <div class="col-xs-3">
                        <br>
                        <button type="button" class="btn btn-primary" @click="AddData();">Agregar</button>
                        <button type="button" class="btn btn-primary" @click="UpdateData();">Modificar</button>
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