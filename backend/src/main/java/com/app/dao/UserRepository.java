package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.User;

public interface UserRepository extends JpaRepository<User, Long> {

//	@Query(value = "SELECT * FROM users WHERE email = ? AND password = ?",nativeQuery = true) 
	User findByEmailAndPassword(String email,String password);
}
