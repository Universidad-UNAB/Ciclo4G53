package com.unab.g53mongo.IRepository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.unab.g53mongo.Collection.Ciudades;

public interface ICiudadesRepository extends MongoRepository<Ciudades, String>{

}
