import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter, Route } from 'react-router-dom';

export class App extends Component {
    render() {
        return ( 
            <div>
                <BrowserRouter>
                    <Navbar/>
                    <Route exact path='/home' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
