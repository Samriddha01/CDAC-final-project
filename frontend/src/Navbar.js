import React from 'react';
import BasicRouting from "./BasicRouting";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
class Navbar extends React.Component {

    render() {
let getUserRole=localStorage.getItem("user_role");
        return (

            <div>
                <div>
                    <div className="container-fluid  text-white" style={{ backgroundColor: "#232F3E" }}>

                        <div className="row">

                            <div className="col-sm-2">
                                <img src="iacsd.png" width="135" height="100">
                                {/* <img src="logo2.png" width="90" height="100"> */}
                                {/* <img src="logo.gif"> */}
                                </img>
                            </div>



                            <div className="col-sm-10">
                                <h2>Interaction Forum for Dr. D. Y. Patil Pratishthan's Institute for Advanced Computing and Software Development</h2>
                            </div>
                        </div>

                        <nav class=" navbar navbar-expand-lg navbar-dark offset-md-2" style={{ backgroundColor: "#232F3E" }}>
                            <div>

                            <button class ="navbar-toggler" type ="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class ="navbar-toggler-icon"></span>
                            </button>

                            <div class ="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class ="navbar-nav mr-auto">

                            </ul>
                            </div>


                            <div class ="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class ="navbar-nav mr-auto">
                            <li class ="nav-item ">
                            <a class ="nav-link" href="/">Home <span class ="sr-only">(current)</span></a>
                            </li>

                            {getUserRole===null  && localStorage.getItem("status")!==false &&(
                           <> <li class ="nav-item ">
                            <a class ="nav-link" href="/Login">Login<span class ="sr-only">(current)</span></a>
                            </li>
                            
                            <li class ="nav-item ">
                            <a class ="nav-link" href="/Register">Register <span class ="sr-only">(current)</span></a>
                            </li></>
                            )}


                            {getUserRole=== 'ADMIN' && localStorage.getItem("status")!==true &&(
                            <li class ="nav-item">
                            <a class ="nav-link" href="/addAdmin" onClick={() => { localStorage.clear() }}>Register Admin <span class ="sr-only">(current)</span></a>
                            </li>
                            )
                    }
                                {/* {getUserRole!== 'USER' && localStorage.getItem("status")!==true &&(
                           <> <li class ="nav-item ">
                            <a class ="nav-link" href="/Login">Login<span class ="sr-only">(current)</span></a>
                            </li>
                            
                            <li class ="nav-item ">
                            <a class ="nav-link" href="/Register">Register <span class ="sr-only">(current)</span></a>
                            </li></>
                            )} */}

                            {/* <li class ="nav-item ">
                            <a class ="nav-link" href="/List">List <span class ="sr-only">(current)</span></a>
                            </li> */}
                            <li class ="nav-item">
                            <a class ="nav-link" href="/Contact">Contact <span class ="sr-only">(current)</span></a>
                            </li>


                            {/* <li class ="nav-item">
                            <a class ="nav-link" href="/DiscussionBoard">DiscussionBoard <span class ="sr-only">(current)</span></a>
                            </li> */}

                            <li class ="nav-item dropdown" >
                            <a class ="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Posts & Categories
                            </a>
                            <div class ="dropdown-menu" style={{ backgroundColor: "#232F3E" }} aria-labelledby="navbarDropdown">
                            <a class ="dropdown-item text-white" href="/addPost">Add Posts</a>
                            <a class ="dropdown-item text-white" href="/addcategory">Add Categories</a>
                            <div class ="dropdown-divider text-white"></div>
                            <a class ="dropdown-item text-white" href="/post">All Posts</a>
                            <a class ="dropdown-item text-white" href="/category">All Categories</a>
                            </div>
                            </li>

                            <form class ="form-inline my-2 my-lg-0 ">
                            <input class ="form-control mr-sm-2 " type ="search" placeholder="Search" aria-label="Search" />
                            <button class ="btn btn-outline-success my-2 my-sm-0 " type ="submit">Search</button>
                            </form>
                            <li>
                            </li>
                        {getUserRole=== 'ADMIN' && localStorage.getItem("status")!==true &&(
                            <li class ="nav-item">
                            <a class ="nav-link" href="/Login" onClick={() => { localStorage.clear() }}>Logout <span class ="sr-only">(current)</span></a>
                            </li>
                            )
                    }

                        {   getUserRole=== 'USER' &&(
                            <li class ="nav-item">
                            <a class ="nav-link" href="/Login" onClick={() => { localStorage.clear() }}>Logout <span class ="sr-only">(current)</span></a>
                            </li>
                            )}
                            </ul>


                        {/* </div> */}
                            </div>
                            </div>
                        </nav>

                    </div>
                </div>


                {/* //ex end */}

                <div className="container-fluid border my-2 bg-dark">
                    {/* <nav class="navbar navbar-expand-lg navbar-light bg-light"> */}

                </div>

            </div>
        );
    }
}

export default Navbar;