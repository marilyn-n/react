import React, { Component } from 'react';
import Ninjas from './components/Ninjas';
import AddNinja from './components/AddNinja';

export class App extends Component {
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
            <div className = "App">
                <h1>My first React Application</h1>
                <p>Hello world</p>
                <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
                <AddNinja addNinja={this.addNinja} />
            </div>
        );
    }
}

export default App;
