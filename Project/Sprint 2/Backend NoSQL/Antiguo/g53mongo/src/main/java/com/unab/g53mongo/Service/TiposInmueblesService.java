package com.unab.g53mongo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.unab.g53mongo.Collection.TiposInmuebles;
import com.unab.g53mongo.IRepository.ITiposInmueblesRepository;
import com.unab.g53mongo.IService.ITiposInmueblesService;

@Service
public class TiposInmueblesService implements ITiposInmueblesService{
	
	@Autowired
	private ITiposInmueblesRepository repository;
	
	@Override
	public List<TiposInmuebles> all() {
		return repository.findAll();
	}

	@Override
	public Optional<TiposInmuebles> findById(String id) {
		return repository.findById(id);
	}

	@Override
	public TiposInmuebles save(TiposInmuebles tiposInmuebles) {
		return repository.save(tiposInmuebles);
	}

	@Override
	public void delete(String id) {
		repository.deleteById(id);		
	}
	
}
