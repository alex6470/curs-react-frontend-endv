import React, { Component } from 'react'
import BootcampComponent from '../bootcamp/bootcamp';
import SearchBarCompoent from '../searchBar/searchBar';
import './bootcampsList.css';

class BootcampListComponent extends Component {
    constructor() {
        super();

        this.state = {
            searchField: '',
            bootcamps: [
            {   id: 0,
                name: "Frontend Bootcamp",
                description: "Frontend Bootcamp",
                date: new Date("2020-05-10")
            },
            {
                id: 1,
                name: "Backend Bootcamp",
                description: "Backend Bootcamp",
                date: new Date("2020-05-09")
            },
            {
                id: 2,
                name: "ML Bootcamp",
                description: "ML Bootcamp",
                date: new Date("2020-04-03")
            }
            ]
        }
    }

    handleDelete = (x) =>{
        let auxArray = this.state.bootcamps;
        
        if (auxArray.length > 1) {
            auxArray.splice(x,1);
        } else {
            auxArray.pop();
        }
    
        this.setState({
            bootcamps:auxArray
        })
    }

    render() {
        const {bootcamps, searchField} = this.state;
        const filteredBootcamps = bootcamps.filter(bootcamp => bootcamp.name.toLowerCase().includes(searchField.toLocaleLowerCase())).sort((a, b) => a.date - b.date)
        return (
            <div className="container">
                <SearchBarCompoent placeholder="Search bootcamps" handleChange={e => this.setState({searchField: e.target.value})}></SearchBarCompoent>
                <div className="card-list">
                {filteredBootcamps.map(bootcamp => <BootcampComponent bootcamp={bootcamp} key={bootcamp.id} deleteThis={this.handleDelete} index ={bootcamp.id}></BootcampComponent>)}
            </div>
            </div>
        
        )
    }
}

export default BootcampListComponent;
