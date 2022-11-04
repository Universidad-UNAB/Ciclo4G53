package com.unab.seguridad_33.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.unab.seguridad_33.entity.Vistas;
import com.unab.seguridad_33.irepository.IVistasRepository;
import com.unab.seguridad_33.iservice.IVistasService;

@Service
public class VistasService implements IVistasService{
    
    @Autowired
    private IVistasRepository repository;

    @Override
    public List<Vistas> all() {       
        return this.repository.findAll();
    }

    @Override
    public Optional<Vistas> findById(Integer id) {
        return this.repository.findById(id);
    }

    @Override
    public Vistas save(Vistas vistas) {
        return this.repository.save(vistas);
    }

    @Override
    public void delete(Integer id) {
        this.repository.deleteById(id);
    }   
    
}
