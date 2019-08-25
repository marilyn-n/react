import React, { Component } from 'react';
import People from './components/People';

export class App extends Component {
    state = {
        ninjas: [
            { name: 'Claudia', age: 41, nationality: 'Mexican', id: 1 },
            { name: 'Benjamin', age: 66, nationality: 'Mexican', id: 2 },
            { name: 'Noe', age: 48, nationality: 'Mexican', id: 3 },
            { name: 'Cinthya', age: 15, nationality: 'Mexican', id: 4 }
        ]
    }
    render() {
        return ( 
            <div className = "App">
                <h1>My first React Application</h1>
                <p>Hello world</p>
                <People ninjas={this.state.ninjas}/>
            </div>
        );
    }
}

export default App;
