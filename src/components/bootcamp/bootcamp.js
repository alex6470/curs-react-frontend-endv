import React from 'react'
import './bootcamp.css';
<<<<<<< HEAD
<<<<<<< HEAD
import {Link} from 'react-router-dom';

const BootcampComponent = props => {

    const {bootcamp: {name, description, id}} = props;
    
=======
import moment from 'moment';

const BootcampComponent = props => {
    const {bootcamp: {name, description, date}, deleteThis, index} = props;
>>>>>>> tema 1
=======
import moment from 'moment';

const BootcampComponent = props => {
    const {bootcamp: {name, description, date}, deleteThis, index} = props;
>>>>>>> 2eadba628ab4f4952ef09b81ee3837aea8deb3e5
    return (
        <div className="card-container">
            <p>{index + 1 }</p>
            <p>{name}</p>
            <p>{description}</p>
<<<<<<< HEAD
<<<<<<< HEAD
            <Link to={`/bootcamp/${id}`}>See details</Link>
=======
            <p>{moment(date).format('DD-MM-yyyy')}</p>
            <button onClick = {deleteThis.bind(null,index)}>Delete</button>
>>>>>>> tema 1
=======
            <p>{moment(date).format('DD-MM-yyyy')}</p>
            <button onClick = {deleteThis.bind(null,index)}>Delete</button>
>>>>>>> 2eadba628ab4f4952ef09b81ee3837aea8deb3e5
        </div>
    )
}

export default BootcampComponent;
