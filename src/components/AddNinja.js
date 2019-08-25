import React, { Component } from 'react';

export class AddNinja extends Component {
  state = {
    name: '',
    age: '',
    country: '',
  }

  handleSubmit = (e) => {
     e.preventDefault();
     this.props.addNinja(this.state);
     this.setState({
        name: '',
        age: '',
        country: '',
     })
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
              <input onChange={this.handleChange} type="text" className="form-control" id="name" value={this.state.name}/>
            </div>
            <div className="form-group">
              <label htmlFor="age">Age:</label>
              <input onChange={this.handleChange} type="text" className="form-control" id="age" value={this.state.age}/>
            </div>
            <div className="form-group">
              <label htmlFor="country">Country:</label>
              <input onChange={this.handleChange} type="text" className="form-control" id="country" value={this.state.country}/>
            </div>
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
    );
  }
}

export default AddNinja;
