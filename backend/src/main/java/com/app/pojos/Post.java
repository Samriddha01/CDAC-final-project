package com.app.pojos;



import javax.persistence.*;

import java.sql.Timestamp;
import java.util.Set;

@Entity
@Table(name = "posts")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "content", nullable = false, length = 2000)
    private String content;

    @Column(name = "publish_date")
    private Timestamp publishDate;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
   @JoinColumn(name = "category_id")
    private Category categories;
    
    public Set<Comment> getComments() {
		return comments;
	}

	public void setComments(Set<Comment> comments) {
		this.comments = comments;
	}

	@OneToMany
    @JoinTable(name = "comments_posts",
    joinColumns = @JoinColumn(name = "comment_id"),
    inverseJoinColumns = @JoinColumn(name = "post_id")
)
    private Set<Comment> comments;



	@Override
	public String toString() {
		return "Post [id=" + id + ", title=" + title + ", content=" + content + ", publishDate=" + publishDate
				+ ", user=" + user + ", categories=" + categories + ", comments=" + comments + "]";
	}

	public Post(Long id, String title, String content, Timestamp publishDate, User user, Category categories,
			Set<Comment> comments) {
		super();
		this.id = id;
		this.title = title;
		this.content = content;
		this.publishDate = publishDate;
		this.user = user;
		this.categories = categories;
		this.comments = comments;
	}

	public Post() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
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

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Category getCategories() {
		return categories;
	}

	public void setCategories(Category categories) {
		this.categories = categories;
	}

}