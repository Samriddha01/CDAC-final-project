package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Category;
import com.app.pojos.Post;
import com.app.service.CategoryService;

@RestController
@CrossOrigin
public class CategoryController {

	@Autowired
	CategoryService categoryService;
	

	@GetMapping("/getAllCategories")
	public List<Category> findAll() {
		System.out.println("Inside get all");
		return categoryService.findAll();
	}
		
	@GetMapping("/getCategory/{name}")
	public Category findByName(@PathVariable String name) {
		return categoryService.findByName(name);
	}
	
	@PostMapping("/addCategory")
	public Category addCategory(@RequestBody Category category) {
		return categoryService.addCategory(category);
		}

	
}
