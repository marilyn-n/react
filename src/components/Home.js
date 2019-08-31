import React, { Component }from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';
import Bestbooks from '../assets/bestbooks.jpg';

export class Home extends Component {
    render() {        
        return ( 
            <div>
                <div>
                    <img src={Bestbooks} className="w-100" height="250" alt="home"/>
                    <h1 className="text-center my-auto mx-auto">My first React Application</h1>
                </div>
                <div className="container py-5">
                    <Ninjas />
                    <AddNinja />
                </div>
            </div>
        );
    }
}

export default Home;
