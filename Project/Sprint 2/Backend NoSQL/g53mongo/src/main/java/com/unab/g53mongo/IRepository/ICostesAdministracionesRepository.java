package com.unab.g53mongo.IRepository;


import org.springframework.data.mongodb.repository.MongoRepository;

import com.unab.g53mongo.Collection.CostesAdministraciones;

public interface ICostesAdministracionesRepository extends MongoRepository<CostesAdministraciones, String>{

}
