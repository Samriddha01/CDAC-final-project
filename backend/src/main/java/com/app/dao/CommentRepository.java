package com.app.dao;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Comment;
import com.app.pojos.Post;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
	
//	@Query("select p from comments_posts p where p.post_id=:id")
//	public Comment getCommentsByPost(@Param("id") long id);
	List<Comment> findCommentByPost(Post post);

}
