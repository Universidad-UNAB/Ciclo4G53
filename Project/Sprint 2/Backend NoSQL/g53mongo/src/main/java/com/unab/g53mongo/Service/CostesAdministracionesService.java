package com.unab.g53mongo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.unab.g53mongo.Collection.CostesAdministraciones;
import com.unab.g53mongo.IRepository.ICostesAdministracionesRepository;
import com.unab.g53mongo.IService.ICostesAdministracionesService;

@Service
public class CostesAdministracionesService  implements ICostesAdministracionesService{

	@Autowired
	private ICostesAdministracionesRepository repository;
	
	@Override
	public List<CostesAdministraciones> all() {
		return repository.findAll();
	}

	@Override
	public Optional<CostesAdministraciones> findById(String id) {
		return repository.findById(id);
	}

	@Override
	public CostesAdministraciones save(CostesAdministraciones costesAdministraciones) {
		return repository.save(costesAdministraciones);
	}

	@Override
	public void delete(String id) {
		repository.deleteById(id);		
	}
}
