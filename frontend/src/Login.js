import "./App.css"
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LoginService from "./services/LoginService";
import { useHistory } from "react-router-dom"
import { getAllByDisplayValue } from "@testing-library/dom";

class LoginScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: '',
      name: '',
      email: '',
      password: '',
      role: '',
      comments: [],
      posts: [],
      message: ''
    }
    this.authenticateUser = this.authenticateUser.bind(this);
  }

  onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });

  authenticateUser = (e) => {
    e.preventDefault();
    let user = { email: this.state.email, password: this.state.password };
    LoginService.login(user).then(res => {
      let user1 = res.data.result;
        user1 === null && this.setState({message : 'Invalid Login Credentials'});
        if(user1 !== null) { this.setState({
        id: res.data.id,
        name:res.data.name,
        email:res.data.email,
        password:res.data.password,
        role:res.data.role,
        comments:res.data.comments,
        posts:res.data.post
      })

      alert("User Login successfully By " + this.state.role)
      this.setState({ message: 'User Login successfully.' });
    
      localStorage.setItem("status", true);
      localStorage.setItem("user_name", res.data.name);
      localStorage.setItem("user_email", res.data.email);
      localStorage.setItem("user_role", res.data.role);
      localStorage.setItem("user_id", res.data.id);
      localStorage.setItem("user_posts", res.data.posts);
      localStorage.setItem("user_comments", res.data.comments);
      
     }
    });
  }

  render() {
    return (
      <div>
        <div className="main">
          <br />
          <h5 className="nameColor1">{this.state.message}</h5>

          <br></br>
           <br></br>
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <div className="card-body">
              <form>
                <form className="mb-3">
                  <label className="form-label"><i class="fa fa-envelope" aria-hidden="true"></i>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="name@gmail.com"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    required
                  />

                </form>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="*****"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    required>
                  </input>
                </div>
                <div className="mb-3">
                  <br />
                  <div className="float-start"><br></br>
                    New User? <Link to="/register">Create Account here</Link>
                  </div>
                  <button type="submit" className="btn btn-success" onClick={this.authenticateUser}>
                    Login
                  </button>
                  <br></br>

                </div>
              </form>

            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

        </div>
      </div>
    );
  }
}
export default LoginScreen