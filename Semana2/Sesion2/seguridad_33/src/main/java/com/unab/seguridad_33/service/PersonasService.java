package com.unab.seguridad_33.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.unab.seguridad_33.entity.Personas;
import com.unab.seguridad_33.irepository.IPersonasRepository;
import com.unab.seguridad_33.iservice.IPersonasService;

@Service
public class PersonasService implements IPersonasService{
    
    @Autowired
    private IPersonasRepository repository;

    @Override
    public List<Personas> all() {
        return this.repository.findAll();
    }

    @Override
    public Optional<Personas> findById(Integer id) {
        return this.repository.findById(id);
    }

    @Override
    public Personas save(Personas personas) {
        return this.repository.save(personas);
    }

    @Override
    public void delete(Integer id) {
        this.repository.deleteById(id);        
    }
}
