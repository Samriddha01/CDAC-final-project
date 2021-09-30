import "./App.css"
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import LoginService from "./services/LoginService";

class CreateAccountScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      role: '',
      push:''
    }
    this.registerUser = this.registerUser.bind(this);
  }

  onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });

  registerUser = (e) => {
    e.preventDefault();
    let user = { name: this.state.name, email: this.state.email, password: this.state.password, role: "USER" };
    LoginService.register(user)
      .then(res => {
        if (res.data.result === null) {
          alert("Email Addreess Already Registered")
        }
        if (res.data.result !== null) {
          console.log(res.data.result);
          alert("SignUp successfully")
          this.setState({ message: 'SignUp successfully.' });
          // this.props.history.push('/posts');
        }

      });
      
  }

  render() {
    return (
      <div>
        <br></br>
           <br></br>
        {/* <Navigation/> */}
        <div className="main">
          {/* <Header title="Create Account" /> */}
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <div className="card-body">
              <div className="form">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChange} placeholder="Enter the user name" required />
                </div>


                {/* <div className="row mb-3">
          <label className="col-sm-4 col-form-label">Last Name</label>
          <div className="col-sm-8">
              <input type="text" className="form-control" name="lastName" value={this.state.lastName} onChange={this.onChange}/>
          </div>
       </div> */}

                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.onChange} placeholder="Enter the yahoo/gmail ID" required />
                </div>


                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.onChange} placeholder="Password of minimum eight digits" required />
                </div>


                <div class="form-group">
                  <label for="exampleInputPassword1">Confirm Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm the Password" required />
                </div>
                {/* 
       <div className="row mb-3">
          <label className="col-sm-4 col-form-label">Phone</label>
          <div className="col-sm-8">
              <input type="text" className="form-control" name="phone" value={this.state.phone} onChange={this.onChange}/>
          </div>
       </div> */}

                <div className="mb-3">
                  <div className="float-start"><br></br>
                    Existing User? <Link to="/login">Login here</Link>
                  </div>
                  <button type="submit" class="btn btn-primary" onClick={this.registerUser}>
                    Register
                  </button>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
           <br></br>
      </div>
    )
  }

}
export default CreateAccountScreen