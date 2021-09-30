import React from 'react';
import Counter from './Counter';
class Course extends React.Component{

    constructor(props){
        super(props);
        this.state={Likes:props.Likes};
        this.handler=this.handler.bind(this);
    }
    handler(data){
        this.setState({Likes:data});
    }
    render(){
    return(
        <div>
        <h3>Courses Details</h3>
        <hr/>
        <img src={this.props.imageurl} width="100" height="100"/>
        <p>Title:{this.props.title}</p>
        <p>Description:{this.props.Description}</p>
        <p>Seats:{this.props.Seats}</p>
        <p>Faculty:{this.props.Faculty}</p>
        <p>Likes:{this.state.Likes}</p>
        <Counter count={this.props.Likes} handler={this.handler}></Counter>
        <br/>
        <button>Enroll the course</button>
        </div>
        );
}
}
export default Course;