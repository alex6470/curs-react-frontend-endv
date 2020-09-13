import React, {Component} from  'react';


const CourseComponent = props => {
    
    const {course:{name,id}, searchField} = props;
    return (
        <div className="card-container">
        <p>{id}</p>
        <p>{name}</p>
    </div>
    )
}

export default CourseComponent;