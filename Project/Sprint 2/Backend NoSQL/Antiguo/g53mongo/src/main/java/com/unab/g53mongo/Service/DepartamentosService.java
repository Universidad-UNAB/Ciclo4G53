package com.unab.g53mongo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.unab.g53mongo.Collection.Departamentos;
import com.unab.g53mongo.IRepository.IDepartamentosRepository;
import com.unab.g53mongo.IService.IDepartamentosService;

@Service
public class DepartamentosService implements IDepartamentosService{
	
	@Autowired
	private IDepartamentosRepository repository;
	
	@Override
	public List<Departamentos> all() {
		return repository.findAll();
	}

	@Override
	public Optional<Departamentos> findById(String id) {
		return repository.findById(id);
	}

	@Override
	public Departamentos save(Departamentos departamentos) {
		return repository.save(departamentos);
	}

	@Override
	public void delete(String id) {
		repository.deleteById(id);		
	}
	
}
