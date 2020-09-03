import React from 'react'
import './bootcamp.css';
import moment from 'moment';

const BootcampComponent = props => {
    const {bootcamp: {name, description, date}, deleteThis, index} = props;
    return (
        <div className="card-container">
            <p>{index + 1 }</p>
            <p>{name}</p>
            <p>{description}</p>
            <p>{moment(date).format('DD-MM-yyyy')}</p>
            <button onClick = {deleteThis.bind(null,index)}>Delete</button>
        </div>
    )
}

export default BootcampComponent;
