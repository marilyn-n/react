import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Post from './components/Post';

export class App extends Component {
    render() {
        return ( 
            <div>
                <BrowserRouter>
                    <Navbar/>
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/blog' component={Blog} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/:post_id' component={Post} />
                    <Footer/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
