package com.unab.seguridad_33.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.unab.seguridad_33.entity.Usuarios;
import com.unab.seguridad_33.irepository.IUsuariosRepository;
import com.unab.seguridad_33.iservice.IUsuariosService;

@Service
public class UsuariosService implements IUsuariosService{
    
    @Autowired
    private IUsuariosRepository repository;

    @Override
    public List<Usuarios> all() {
        return this.repository.findAll();
    }

    @Override
    public Optional<Usuarios> findById(Integer id) {
        return this.repository.findById(id);
    }   
    

    @Override
    public Optional<Usuarios> find(String userNamer, String userPassword) {
        // TODO Auto-generated method stub
        return Optional.empty();
    }

    @Override
    public Usuarios save(Usuarios usuarios) {
        return this.repository.save(usuarios);
    }

    @Override
    public void delete(Integer id) {
        this.repository.deleteById(id);        
    }
}
