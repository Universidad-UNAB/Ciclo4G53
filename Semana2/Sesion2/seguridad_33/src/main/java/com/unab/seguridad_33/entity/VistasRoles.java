package com.unab.seguridad_33.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "vistas_roles") 
public class VistasRoles implements Serializable{

private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer Id;   
    
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "vista_id", nullable = false)
    private Vistas VistaId;
    
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "rol_id", nullable = false)
    private Roles RolId;

    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public Vistas getVistaId() {
        return VistaId;
    }

    public void setVistaId(Vistas vistaId) {
        VistaId = vistaId;
    }

    public Roles getRolId() {
        return RolId;
    }

    public void setRolId(Roles rolId) {
        RolId = rolId;
    }    
    
}
