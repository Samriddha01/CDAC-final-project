package com.app.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.User;
import com.app.pojos.UserRole;
import com.app.service.UserServiceImpl;

@RestController
@CrossOrigin
public class UserController {
	@Autowired
	UserServiceImpl userService;

	@PostMapping("/userRegister")
	public User  registerUser(@RequestBody User user) {
		System.out.println("User Details " + user.toString());
		User abc=userService.registerUser(user);
//		return "User Registered Successfully";
		return abc;
		
	}
	
	@PostMapping("/login")
	public User getUserByEmailAndPassword(@RequestBody User user) {
		System.out.println(user.getEmail()+" "+user.getPassword());
		return userService.checkLogin(user.getEmail(), user.getPassword());
	}
	@GetMapping("/allUsers")
	public List<User> getAllUsers() {
		return userService.findAll();
	}
	
}
