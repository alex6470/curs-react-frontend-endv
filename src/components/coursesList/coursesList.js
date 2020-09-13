import React, {Component, useState} from 'react';
import CourseComponent from '../course/course';
import SearchBarCompoent from '../searchBar/searchBar';

// http://localhost:3000/courses to access it

const CoursesList = () => {
    const [componentState, setComponentState] = useState({
            courses: [
            {
                id: '1',
                name: 'ReactCourse',
            },{
                id: '2',
                name: 'AngularCourse',
            },{
                id: '3',
                name: 'RXJSCourse',
            }],
            searchField: "",
    });

    //Comentat dupa rescriere search
    // const updateSearchField = e => {
    //     setComponentState({...componentState, searchField: e.target.value});
    // }
    const {courses, searchField, isLoading} = componentState;
    //Comentat dupa rescriere search
   // const filteredCourses = courses.filter(course => course.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase()));

    return(
    <div className="container">
        <SearchBarCompoent placeholder="Search courses ->" courses={courses}></SearchBarCompoent>
        {/* <div>{filteredCourses.map(course => <CourseComponent key={course.id} course={course}></CourseComponent>)}</div> */}
    </div>
    )
}

export default CoursesList;