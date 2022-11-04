package com.unab.seguridad_33.iservice;

import java.util.List;
import java.util.Optional;

import com.unab.seguridad_33.entity.Personas;

public interface IPersonasService {
    
    public List<Personas> all();
    
    public Optional<Personas> findById(Integer id);
    
    public Personas save(Personas personas);
    
    public void delete(Integer id);

}
