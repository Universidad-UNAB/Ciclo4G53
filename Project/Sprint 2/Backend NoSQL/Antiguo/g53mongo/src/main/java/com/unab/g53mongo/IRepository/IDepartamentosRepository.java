package com.unab.g53mongo.IRepository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.unab.g53mongo.Collection.Departamentos;

public interface IDepartamentosRepository extends MongoRepository<Departamentos, String>{

}
