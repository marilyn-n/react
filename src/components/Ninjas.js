import React, { Component } from 'react';
import { connect } from 'react-redux';


export class Ninjas extends Component {
    render () {
        const ninjaList = this.props.ninjas.map(ninja => {
          return ninja.age > 20 ? (
            <div className="card ninja" key={ninja.id}>
              <div className="card-body">
                  <div className="card-title">Name: {ninja.name}</div>
                  <div className="card-subtitle">Age: {ninja.age}</div>
                  <div className="card-text">Nationality: {ninja.nationality}</div>
                  <button className="btn btn-outline-danger btn-sm">Delete ninja</button>
              </div>
            </div>
          ) : null;
      })

      return (
        <div className="d-flex ninja-list justify-content-around my-5">
          { ninjaList }
        </div>
      )
    }

}

const mapStateToProps = (state) => {
  return {
      ninjas: state.ninjas
  }
  
}

export default connect(mapStateToProps)(Ninjas);
