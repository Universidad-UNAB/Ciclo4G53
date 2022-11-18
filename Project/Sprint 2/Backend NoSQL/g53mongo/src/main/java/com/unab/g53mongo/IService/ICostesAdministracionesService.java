package com.unab.g53mongo.IService;

import java.util.List;
import java.util.Optional;

import com.unab.g53mongo.Collection.CostesAdministraciones;

public interface ICostesAdministracionesService {

	public List<CostesAdministraciones> all();

	public Optional<CostesAdministraciones> findById(String id);

	public CostesAdministraciones save(CostesAdministraciones costesAdministraciones);

	public void delete(String id);
}
