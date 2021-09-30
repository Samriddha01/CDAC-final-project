package com.app.pojos;

import javax.persistence.*;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Entity
@Table(name = "comments")
public class Comment {

    @Override
	public String toString() {
		return "Comment [id=" + id + ", content=" + content + ", publishDate=" + publishDate + ", post=" + post
				+ ", user=" + user + "]";
	}

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "content", nullable = false, length = 500)
    private String content;

    @Column(name = "publish_date")
    private Timestamp publishDate;

//    @ManyToOne(fetch = FetchType.LAZY)
   
//    @JoinColumn(name = "post_id")
     @ManyToOne(
             cascade = CascadeType.ALL,
               fetch = FetchType.EAGER
       )
     private Post post;
     
     
//was on both post and user
//    (fetch = FetchType.EAGER)
//    @ManyToOne(fetch = FetchType.LAZY)
     
     
     
    @ManyToOne(
    		fetch=FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    public Comment() {
    }

    public Comment(String content) {
        this.content = content;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Timestamp getPublishDate() {
        return publishDate;
    }

    public void setPublishDate(Timestamp publishDate) {
        this.publishDate = publishDate;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
