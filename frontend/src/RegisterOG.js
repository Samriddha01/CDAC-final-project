import React from "react";
import LoginService from './services/LoginService';

class Register extends React.Component {
  constructor(props){
  super(props)
  this.state = {
  name: '',
  email: '',
  password: '',
  role: 'USER'
}
  this.changeNameHandler = this.changeNameHandler.bind(this);
this.changeEmailHandler = this.changeEmailHandler.bind(this);
this.changePasswordHandler = this.changePasswordHandler.bind(this);
this.registerUser = this.registerUser.bind(this);
}

registerUser=(p)=>{
  p.preventDefault();
  let user={name:this.state.name,email:this.state.email,password:this.state.password};//publish_date:this.state.publish_date ,user_id:this.state.user_id
  console.log('user =>' +JSON.stringify(user));
  LoginService.register(user).then(res => {
    if(res.data.result === null){
      alert("Email Addreess Already Registered")
    }
    if(res.data.result !== null){
      console.log(res.data.result);
      alert("SignUp successfully")
      this.setState({message : 'SignUp successfully.'});
      this.props.history.push('/');
    }
    
      this.props.history.push('/');
  });
}
changeNameHandler=(event)=>{
    this.setState({name :event.target.value});
}
changeEmailHandler=(event)=>{
  this.setState({email :event.target.value});
}
changePasswordHandler=(event)=>{
  this.setState({password :event.target.value});
}
render() {
  return (
    <div>
      <div className="container-sm p-3 my-3">

        <div className="col-sm-4">
          <form>

            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              {/* <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter the yahoo/gmail ID" /> */}
              <input type="email" placeholder="Enter the yahoo/gmail ID" name="name" className="form-control"
                value={this.state.description} onChange={this.changeEmailHandler} />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              {/* <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password of minimum eight digits" /> */}
              <input type="password" placeholder="Password" name="name" className="form-control"
                value={this.state.description} onChange={this.changePasswordHandler} />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Name</label>
              {/* <input type="password" class="form-control" id="exampleInputPassword1" placeholder="ConfirmPassword" /> */}
              <input placeholder="Enter the Full Name" name="name" className="form-control"
                value={this.state.description} onChange={this.changeNameHandler} />
            </div>

            {/* <div className="row">
                <div class="col">
                  <input type="text" class="form-control" placeholder="First name" />
                </div>
                <div class="col">
                  <input type="text" class="form-control" placeholder="Last name" />
                </div>
              </div> */}
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Remember me</label>
            </div>
            <button type="submit" class="btn btn-primary" onClick={this.savePost}>Submit</button>
          </form>
        </div>
      </div>
    </div>





  );
}
}
export default Register;