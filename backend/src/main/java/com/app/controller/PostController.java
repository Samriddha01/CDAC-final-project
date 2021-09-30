package com.app.controller;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
import com.app.service.PostService;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {

	@Autowired
	PostService postServices;
	
	@Autowired
	CategoryService categoryService;
	
	
	@GetMapping("/getAllPosts")
	public List<Post> findAll() {
		System.out.println("Inside get all");
		return postServices.findAll();

	}
//	@PostMapping("/addpost")
//
//	public Post addPost(@RequestBody Post post) {       
//		System.out.println("inside add post");
//		
////		((CategoryService) list).findAll().
//		System.out.println(post.toString());
//		
//		return postServices.addPosts(post);
//	}
//	
	
	@PostMapping("/addpost/{id}")
	public Post addPost(@RequestBody Post post,@PathVariable long id) {       
		System.out.println("inside add post");
		System.out.println(post);
		return postServices.addPost(post,id);
	}
		
	

//	@PostMapping("/addpost")
//
//	public Post addPost(@RequestBody Post post,@PathVariable long id) {       
//		System.out.println("inside add post");
////		((CategoryService) list).findAll().
//		
//		
//		return postServices.addPost(post,id);
//	}
//	
//	@GetMapping("/search/{category}")
//	public  List<Post> findByCategories(@PathVariable String category){
////		Category categories=categoryService.findByName(category);
//		
//		List<Post> list=new ArrayList<>();
//		list.addAll(postServices.findByCategories(category));
//		return list;
//	}
	@PostMapping("/addpostbyname/{name}")

	public Post addPostByName(@RequestBody Post post,@PathVariable String name) {       
		System.out.println("inside add post");
//		((CategoryService) list).findAll().
		
		return postServices.addPostByName(post,name);
	}
	
	@GetMapping("/viewpost/{id}")
	public Post getPost(@PathVariable long id) {       
		System.out.println("inside get post");
		return postServices.findById(id);
	}
		
	
}
