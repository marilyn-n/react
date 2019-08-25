import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

export class Home extends Component {
    state = {
        ninjas: [
            { name: 'Claudia', age: 41, nationality: 'Mexican', id: 1 },
            { name: 'Benjamin', age: 66, nationality: 'Mexican', id: 2 },
            { name: 'Noe', age: 48, nationality: 'Mexican', id: 3 },
            { name: 'Cinthya', age: 15, nationality: 'Mexican', id: 4 }
        ]
    }

    addNinja = (ninja) => {
        ninja.id = Math.random();
        let ninjas = [...this.state.ninjas, ninja];
        this.setState({
            ninjas: ninjas
        })
    }

    deleteNinja = (id) => {
        let ninjas = this.state.ninjas.filter(ninja => ninja.id !== id)
        this.setState({
            ninjas: ninjas
        })
    }

    render() {
        return ( 
            <div>
                <div className="container py-5">
                    <h1>My first React Application</h1>
                    <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
                    <AddNinja addNinja={this.addNinja} />
                </div>
            </div>
        );
    }
}

export default Home;
