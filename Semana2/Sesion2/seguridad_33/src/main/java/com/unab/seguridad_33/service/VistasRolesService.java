package com.unab.seguridad_33.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.unab.seguridad_33.entity.VistasRoles;
import com.unab.seguridad_33.irepository.IVistasRolesRepository;
import com.unab.seguridad_33.iservice.IVistasRolesService;

@Service
public class VistasRolesService implements IVistasRolesService {
    
    
    @Autowired
    private IVistasRolesRepository repository;

    @Override
    public List<VistasRoles> all() {
      return this.repository.findAll();
    }

    @Override
    public Optional<VistasRoles> findById(Integer id) {
        return this.repository.findById(id);
    }

    @Override
    public VistasRoles save(VistasRoles vistasRoles) {
        return this.repository.save(vistasRoles);
    }

    @Override
    public void delete(Integer id) {
        this.repository.deleteById(id);        
    }   

}
