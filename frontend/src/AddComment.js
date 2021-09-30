import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import React, { Component } from 'react'
import 'react-dropdown/style.css';
import CommentService from "./services/CommentService";
import { Link } from "react-router-dom";



export default class AddComment extends Component{
    constructor(props) {
        super(props)
        this.state = {
            content: ' ',
            user: {},
        }
        this.changeContentNameHandler = this.changeContentNameHandler.bind(this);
        this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
        this.saveComment = this.saveComment.bind(this);
    }
    saveComment = (p) => {
         p.preventDefault();
        let comment = { content: this.state.content, user:{id:localStorage.getItem("user_id")} };//publish_date:this.state.publish_date category_id: this.state.category_id 
        console.log('comment =>' + JSON.stringify(comment));
        CommentService.addComment(comment).then(res => {
            this.props.history.push('/post');
        });
    }
    changeContentNameHandler = (event) => {
        this.setState({ content: event.target.value });
    }
   
    changeUserIdHandler = (event) => {
        
        this.setState({ user_id: event.target.value });
    }

    cancel() {
        this.props.history.push('/category');
        
    }

    render() {
        return (
            <div className="container">
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <br/>
                        <h3 className="header1 text-center">Add Comment</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Content</label>
                                    <input placeholder="Content" name="content" className="form-control"
                                        value={this.state.content} onChange={this.changeContentNameHandler} />

                                </div>

                                <button className="btn btn-success" onClick={this.saveComment}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel} style={{ marginLeft: "10px" }}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>

            </div>
        )
    }
}