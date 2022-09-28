package com.servicoemail.servicoEmail.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.servicoemail.servicoEmail.model.EmailModel;


public interface EmailRepository extends MongoRepository<EmailModel, String>{
	
	
	
}
