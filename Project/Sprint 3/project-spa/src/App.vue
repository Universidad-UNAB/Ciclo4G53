<template>
  <nav>
    <router-link to="/estate/propertyType">Tipos Inmuebles</router-link> |
    <router-link to="/estate/costManagement">Costes de Aministración</router-link> |
    <router-link to="/security/permission">Registro Permisos</router-link> |
    <router-link to="/security/role">Registro Roles</router-link> |
    <router-link to="/security/permissionRole">Asignar Permisos al Rol</router-link> |
    
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </nav>
  <router-view/>
</template>
