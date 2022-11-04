package com.unab.seguridad_33.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.unab.seguridad_33.entity.VistasRoles;
import com.unab.seguridad_33.iservice.IVistasRolesService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("security/viewRol")
public class VistasRolesController {
    
    @Autowired
    private IVistasRolesService service;
    
    @GetMapping
    public List<VistasRoles> all() {
        return service.all();
    }
    
    @GetMapping("{id}")
    public Optional<VistasRoles> show(@PathVariable Integer id) {
        return service.findById(id);
    }
    
    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public VistasRoles save(@RequestBody VistasRoles vistasRoles) {
        return service.save(vistasRoles);
    }
    
    @PutMapping("{id}")
    @ResponseStatus(code = HttpStatus.CREATED)
    public VistasRoles update(@PathVariable Integer id, @RequestBody VistasRoles vistasRoles) {
        Optional<VistasRoles> op = service.findById(id);
        
        if (!op.isEmpty()) {
            VistasRoles vistasRolesUpdate = op.get();
            vistasRolesUpdate.setVistaId(vistasRoles.getVistaId());
            vistasRolesUpdate.setRolId(vistasRoles.getRolId());                        
            return service.save(vistasRolesUpdate);
        }
        
        return vistasRoles;
    }
    
    @DeleteMapping("{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Integer id) {
        service.delete(id);
    }
}
