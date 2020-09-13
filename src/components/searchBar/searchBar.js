import React, {useState, ReactFragment} from 'react'
import CourseComponent from '../course/course';
import './searchBar.css';

// http://localhost:3000/courses to access it

const SearchBarCompoent = ({placeholder, courses}) => {
    console.log(courses, "COURSES");
    const [componentState, setComponentState] = useState({
        dummy : [],
        searchField : ""
    });

    const updateSearchField = e => {
        setComponentState({...componentState, searchField: e.target.value});
    }
    const {dummy, searchField} = componentState;
    const filteredCourses = courses.filter(course => course.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase()));

    return (
        <div className="search">
            <input type="search" placeholder={placeholder} onChange={updateSearchField} />
            <div>{filteredCourses.map(course => <CourseComponent key={course.id} course={course}></CourseComponent>)}</div>
        </div>
    )
}

export default SearchBarCompoent;
