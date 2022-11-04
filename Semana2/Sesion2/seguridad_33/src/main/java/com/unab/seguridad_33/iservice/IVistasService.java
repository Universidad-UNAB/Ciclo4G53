package com.unab.seguridad_33.iservice;

import java.util.List;
import java.util.Optional;

import com.unab.seguridad_33.entity.Vistas;

public interface IVistasService {
    
    public List<Vistas> all();
    
    public Optional<Vistas> findById(Integer id);
    
    public Vistas save(Vistas vistas);
    
    public void delete(Integer id);

}
