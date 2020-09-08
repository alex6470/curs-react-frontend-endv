import React from 'react'
import './bootcamp.css';
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> aa9de053fc16f35a3372d21c65096a509276853e
import {Link} from 'react-router-dom';

const BootcampComponent = props => {

    const {bootcamp: {name, description, id}} = props;
    
=======
import moment from 'moment';

const BootcampComponent = props => {
    const {bootcamp: {name, description, date}, deleteThis, index} = props;
>>>>>>> tema 1
<<<<<<< HEAD
=======
=======
import moment from 'moment';

const BootcampComponent = props => {
    const {bootcamp: {name, description, date}, deleteThis, index} = props;
>>>>>>> 2eadba628ab4f4952ef09b81ee3837aea8deb3e5
>>>>>>> aa9de053fc16f35a3372d21c65096a509276853e
    return (
        <div className="card-container">
            <p>{index + 1 }</p>
            <p>{name}</p>
            <p>{description}</p>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> aa9de053fc16f35a3372d21c65096a509276853e
            <Link to={`/bootcamp/${id}`}>See details</Link>
=======
            <p>{moment(date).format('DD-MM-yyyy')}</p>
            <button onClick = {deleteThis.bind(null,index)}>Delete</button>
>>>>>>> tema 1
<<<<<<< HEAD
=======
=======
            <p>{moment(date).format('DD-MM-yyyy')}</p>
            <button onClick = {deleteThis.bind(null,index)}>Delete</button>
>>>>>>> 2eadba628ab4f4952ef09b81ee3837aea8deb3e5
>>>>>>> aa9de053fc16f35a3372d21c65096a509276853e
        </div>
    )
}

export default BootcampComponent;
