package com.example.AdministracionConjuntoMongoNoSql.Collection;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document("CostesAdministraciones")
public class CostesAdministraciones {
	
	@Id    
    private String id;
    
    @Field("codigo")
    private String codigo;
    
    @Field("nombre")
    private String nombre;
        
    @Field("valorMes")
    private double valorMes;
    
    @Field("estado")
    private Boolean estado;
    
    @DBRef
    private TiposInmuebles tipoInmuebleId;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getCodigo() {
		return codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public double getValorMes() {
		return valorMes;
	}

	public void setValorMes(double valorMes) {
		this.valorMes = valorMes;
	}

	public Boolean getEstado() {
		return estado;
	}

	public void setEstado(Boolean estado) {
		this.estado = estado;
	}

	public TiposInmuebles getTipoInmuebleId() {
		return tipoInmuebleId;
	}

	public void setTipoInmuebleId(TiposInmuebles tipoInmuebleId) {
		this.tipoInmuebleId = tipoInmuebleId;
	}      
}
