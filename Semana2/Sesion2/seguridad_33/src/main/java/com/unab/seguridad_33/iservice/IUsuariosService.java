package com.unab.seguridad_33.iservice;

import java.util.List;
import java.util.Optional;

import com.unab.seguridad_33.entity.Usuarios;

public interface IUsuariosService {

    public List<Usuarios> all();
    
    public Optional<Usuarios> findById(Integer id);
    
    public Optional<Usuarios> find(String userNamer, String userPassword);
    
    public Usuarios save(Usuarios usuarios);
    
    public void delete(Integer id);
}
