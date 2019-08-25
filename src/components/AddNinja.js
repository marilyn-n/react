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
      <div className="ninja-form">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="age">Age:</label>
          <input type="text" id="age" onChange={this.handleChange} />
          <label htmlFor="country">Country:</label>
          <input type="text" id="country" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddNinja;
