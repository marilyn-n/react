import React, { Component } from 'react';

export class AddNinja extends Component {
  state = {
    name: null,
    age: null,
    country: null,
  }

  handleSubmit = (e) => {
     e.preventDefault();
     this.props.addNinja(this.state);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })

  }

  render() {
    return (
      <div className="ninja-form my-5">
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input onChange={this.handleChange} type="text" className="form-control" id="name"/>
            </div>
            <div className="form-group">
              <label htmlFor="age">Age:</label>
              <input onChange={this.handleChange} type="text" className="form-control" id="age"/>
            </div>
            <div className="form-group">
              <label htmlFor="country">Country:</label>
              <input onChange={this.handleChange} type="text" className="form-control" id="country"/>
            </div>
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
    );
  }
}

export default AddNinja;
