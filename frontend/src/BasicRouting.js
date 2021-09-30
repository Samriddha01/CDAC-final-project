import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import LoginComponent from './Login';
import FAQs from './FAQs';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Dashboard from './Dashboard';
import PrivacyPolicyScreen from './PrivacyPolicyScreen';
import TermAndConditionScreen from './TermAndConditionScreen';
import AddComment from './AddComment';
import ListPostComponent from './components/ListPostComponent';
import AddPostComponent from './components/AddPostComponent';
import AddCategory from './components/AddCategory';
import ListCategoryComponent from "./components/ListCategory";
import CreateAccountScreen from "./Register";
import LoginScreen from "./Login";
import ViewCommentsComponent from "./components/ViewComments";
import CreateAdminAccount from "./RegisterAdmin";
class BasicRouting extends React.Component {
  render() {
    return (<div>  
    <Router>
        <Switch>
        {/* <Route exact path='/signin'><SigninScreen /></Route> */}
          <Route exact path='/'><Home /></Route>
          <Route exact path='/About'><About /></Route>
          <Route exact path='/Contact'><Contact /></Route>
          {/* <Route exact path='/Login'><LoginComponent /></Route> */}
          <Route exact path='/Register'><CreateAccountScreen /></Route>
          <Route exact path='/Dashboard'><Dashboard /></Route>
          {/* <Route exact path='/List'><List /></Route> */}
          <Route exact path='/FAQs'><FAQs /></Route>
          <Route exact path='/AddComment'><AddComment /></Route>
          <Route exact path='/TermAndConditionScreen'><TermAndConditionScreen/></Route>
          <Route exact path='/PrivacyPolicyScreen'><PrivacyPolicyScreen /></Route>
          <Route exact path='/signin'><CreateAccountScreen /></Route>
          <Route exact path='/Login'><LoginScreen /></Route>
          <Route path ="/post" component ={ ListPostComponent }></Route>
        <Route path ="/addpost" component ={ AddPostComponent }></Route>
        <Route path ="/addCategory" component ={ AddCategory }></Route>
        <Route path ="/viewComments" component ={ ViewCommentsComponent }></Route>
        <Route path ="/category" component ={ ListCategoryComponent }></Route>
        <Route path ="/addAdmin" component ={ CreateAdminAccount }></Route>
       
      
        </Switch>
      </Router>
  
    </div>
  
    );
  }
}

export default BasicRouting;
  