package com.unab.g53mongo.IRepository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.unab.g53mongo.Collection.Usuarios;

public interface IUsuariosRepository extends MongoRepository<Usuarios, String>{

}
