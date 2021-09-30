import React from 'react';
import Course from './Course';
import data from './services/Course.json'
import Navbar from "./Navbar";

class List extends React.Component {
    render() {
        const Courses = data;
        return (
            <div>
                {
                    Courses.map(item => (
                        <Course Title={item.Title}
                            imageurl={item.imageurl}
                            Description={item.Description}
                            Seats={item.Seats}
                            Faculty={item.Faculty}
                            Likes={item.Likes} />
                    )

                    )

                }

            </div>
        );
    }
}
export default List;