package com.unab.g53mongo.IRepository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.unab.g53mongo.Collection.TiposInmuebles;

public interface ITiposInmueblesRepository extends MongoRepository<TiposInmuebles, String>{

}
