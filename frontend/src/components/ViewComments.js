import React, { Component } from 'react';
import 'react-dropdown/style.css';
import CommentService from '../services/CommentService';

const id= localStorage.getItem('user_id')
export default class ViewCommentsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listComment: [],
            localUserId: localStorage.getItem("user_id")
        }
        this.post = this.post.bind(this);
    }
    componentDidMount() {

        CommentService.findComment().then((res) => {
            this.setState({ listComment: res.data });
        });
    }

    post(id) {
        console.log(id);
        localStorage.setItem("Post", id);
        this.props.history.push('/addComment');
    }

    delete(id){
       CommentService.delete(id);
    }

    render() {
        return (
            <div className="container-fluid">
                <br></br>
                <br></br>
                <h2 className="text-center">View Post Comments</h2>
                <div className="row ">
                </div>
                <div className="container">
                    <div className="col sm-6">
                        {this.state.listComment.map(listComment =>
                            <div class="main1 card border border-success shadow-0 mb-3" style={{ maxWidth: "46rem" }} key={listComment.id}>
                                <div class="card-header bg-transparent border-success"><h6 className="">
                                    POST TITLE - {listComment.post.title}</h6></div>
                                <div class="card-body ">
                                    <p class="card-text">
                                      
                                       CONTENT - {listComment.content}
                                    </p>
                                    <p align="right" >
                                      POSTED BY - {listComment.user.name}
                                        
                                    </p>
                                    <div class="card-footer bg-transparent border-success">  
                                                                       
                                        <td> <button style={{ marginLeft: "20px" }} onClick={() => this.post(listComment.post.id)} href="./AddComment" className="btn btn-danger">Add Comment</button></td>   
                                            <td>
                                             <button style={{ marginLeft: "20px" }} onClick={() => this.delete(listComment.id)} 
                                             className="btn btn-danger">delete Comment</button></td>
                                        
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div >
        );
    }
}
