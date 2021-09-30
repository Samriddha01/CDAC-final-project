package com.app.dao;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Category;
import com.app.pojos.Post;

@Repository
public interface PostReposotory extends JpaRepository<Post, Long> {

	public List<Post> findByCategories(Category categories);

	
}
