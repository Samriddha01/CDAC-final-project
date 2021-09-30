package com.app.pojos;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
//Map this to existing tables "users"
@Table(name = "users")
public class User{
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

	@Column(length = 20,name="name")  //not needed if mapping to existing table /col
	private String name;
	
	@Column(length = 20,unique = true)
	private String email;
	
	@Column(length = 20)
	private String password;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 10)
	private UserRole role;
	
	 @OneToMany
	 @JoinTable(name = "user_comments",
	    joinColumns = @JoinColumn(name = "comment_id"),
	    inverseJoinColumns = @JoinColumn(name = "user_id")
	)
	private Set<Comment> comments;
	
	 @OneToMany(
	            cascade = CascadeType.ALL,
	            orphanRemoval = true
	    )
    private Set<Post> posts;
	public User() {
		// TODO Auto-generated constructor stub
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public UserRole getRole() {
		return role;
	}
	public void setRole(UserRole role) {
		this.role = role;
	}
	public Set<Comment> getComments() {
		return comments;
	}
	public void setComments(Set<Comment> comments) {
		this.comments = comments;
	}
	public Set<Post> getPosts() {
		return posts;
	}
	public void setPosts(Set<Post> posts) {
		this.posts = posts;
	}
	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", email=" + email + ", password=" + password + ", role=" + role
				+ ", comments=" + comments + ", posts=" + posts + "]";
	}


	
	
	
}
