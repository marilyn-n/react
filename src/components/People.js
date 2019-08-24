import React, { Component } from 'react';

export class People extends Component {
  render() {
    const ninjas = this.props.ninjas;
    const ninjaList = ninjas.map(ninja => {
      return (
          <div className="ninja" key={ninja.id}>
            <div>Name: {ninja.name}</div>
            <div>Age: {ninja.age}</div>
            <div>Nationality: {ninja.nationality}</div>
          </div>
      );
    })

    return (
      <div className="ninja-list">
        { ninjaList }
      </div>
    )
    
  }
}

export default People;
