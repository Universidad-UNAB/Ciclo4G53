package com.unab.g53mongo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.unab.g53mongo.Collection.Usuarios;
import com.unab.g53mongo.IRepository.IUsuariosRepository;
import com.unab.g53mongo.IService.IUsuariosService;

@Service
public class UsuariosService implements IUsuariosService{
	
	@Autowired
	private IUsuariosRepository repository;
	
	@Override
	public List<Usuarios> all() {
		return repository.findAll();
	}

	@Override
	public Optional<Usuarios> findById(String id) {
		return repository.findById(id);
	}

	@Override
	public Usuarios save(Usuarios ciudades) {
		return repository.save(ciudades);
	}

	@Override
	public void delete(String id) {
		repository.deleteById(id);		
	}
	
}
