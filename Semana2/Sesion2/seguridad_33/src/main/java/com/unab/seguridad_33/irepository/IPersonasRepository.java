package com.unab.seguridad_33.irepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.unab.seguridad_33.entity.Personas;

public interface IPersonasRepository extends JpaRepository<Personas, Integer>{

}
