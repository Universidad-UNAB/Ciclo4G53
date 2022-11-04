package com.unab.seguridad_33.iservice;

import java.util.List;
import java.util.Optional;

import com.unab.seguridad_33.entity.VistasRoles;

public interface IVistasRolesService {

    public List<VistasRoles> all();
    
    public Optional<VistasRoles> findById(Integer id);
    
    public VistasRoles save(VistasRoles vistasRoles);
    
    public void delete(Integer id);
}
