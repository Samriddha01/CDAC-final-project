// import React, { Component } from 'react'
// import LoginService from "../../services/ApiService";

// class Login extends Component{

//     constructor(props){
//         super(props);
//         this.state ={
//             email: '',
//             password: '',
//             message : ''
//         }
//         this.loginUser = this.loginUser.bind(this);
//     }

//     loginUser = (e) => {
//         e.preventDefault();
//         let user = {email: this.state.email, password: this.state.password};
//         LoginService.login(user)
//             .then(resp => {
//                 console.log(resp.data);//actual response data sent by back end
//                 this.setState({message : 'User added successfully.'});
//                 this.props.history.push('/users');
//             }).catch( err=>{
//               //  console.error(err);
//                 console.error("in err ",err.response.data);
//                 //err.response.data => DTO on the server side : ErrorResponse
//                 alert(err.response.data.message);
//                 this.props.history.push('/users');
//             })

//     }

//     onChange = (e) =>
//         this.setState({ [e.target.name]: e.target.value });

//     render() {
//         return(
//             <div>
//                 <h2 className="text-center">Add User</h2>
//                 <form>
//                 <div className="form-group">
//                     <label>Email:</label>
//                     <input type="text" placeholder="email" name="email" className="form-control" value={this.state.email} onChange={this.onChange}/>
//                 </div>

//                 <div className="form-group">
//                     <label>Password:</label>
//                     <input type="password" placeholder="password" name="password" className="form-control" value={this.state.password} onChange={this.onChange}/>
//                 </div>
//                 <button className="btn btn-success" onClick={this.loginUser}>Login</button>
//             </form>
//     </div>
//         );
//     }
// }

// export default Login;