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

import com.unab.seguridad_33.entity.Vistas;
import com.unab.seguridad_33.iservice.IVistasService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("security/view")
public class VistasController {

    @Autowired
    private IVistasService service;
    
    @GetMapping
    public List<Vistas> all() {
        return service.all();
    }
    
    @GetMapping("{id}")
    public Optional<Vistas> show(@PathVariable Integer id) {
        return service.findById(id);
    }
    
    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Vistas save(@RequestBody Vistas vistas) {
        return service.save(vistas);
    }
    
    @PutMapping("{id}")
    @ResponseStatus(code = HttpStatus.CREATED)
    public Vistas update(@PathVariable Integer id, @RequestBody Vistas vistas) {
        Optional<Vistas> op = service.findById(id);
        
        if (!op.isEmpty()) {
            Vistas vistasUpdate = op.get();
            vistasUpdate.setCodigo(vistas.getCodigo());
            vistasUpdate.setNombre(vistas.getNombre());
            vistasUpdate.setRuta(vistas.getRuta());
            vistasUpdate.setEstado(vistas.getEstado());
            return service.save(vistasUpdate);
        }
        
        return vistas;
    }
    
    @DeleteMapping("{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Integer id) {
        service.delete(id);
    }
}
