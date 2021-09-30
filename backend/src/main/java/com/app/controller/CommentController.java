package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Comment;
import com.app.service.CommentService;
import com.app.service.PostService;

@RestController
@CrossOrigin
public class CommentController {

	@Autowired
	CommentService commentServices;
	
	@Autowired
	PostService postServices;
	
	@PostMapping("/addComment/{id}")
	public Comment addComment(@RequestBody Comment comment,@PathVariable Long id) {
		System.out.println(comment);
		return commentServices.addComment(comment,id);
	}
	
	@GetMapping("/findComment/{id}") 
	public List<Comment> getComment(@PathVariable Long id) {
		
		return commentServices.getComment(id);
	}
	
	@PostMapping("/deleteComment/{id}")
	public Comment deleteComment(@PathVariable Long id) {
		Comment comment=commentServices.findComment(id);
	 commentServices.deleteComment(id);
	 return comment;
	}
	
	
	
}
