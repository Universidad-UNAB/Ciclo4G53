package com.example.AdministracionConjuntoMongoNoSql.Collection;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document("Roles")
public class Roles {
	@Id
    private String id;
    
    @Field("nombre")
    private String nombre;
    
    @Field("descripcion")
    private String descripcion;
    
    @Field("estado")
    private boolean estado;
    
 
    //Encapsulamiento

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public boolean getEstado() {
		return estado;
	}

	public void setEstado(boolean estado) {
		this.estado = estado;
	}
}