import React, { Component } from 'react';

export class Post extends Component {
  state = {
    post: null
  }
  componentDidMount() {
    let id = this.props.match.params.post_id
    fetch('https://jsonplaceholder.typicode.com/posts/'+id)
      .then(res => res.json())
      .then(response => {
        this.setState({
          post: response
        })
      })
  }

  render() {

    const post = this.state.post ? (
      <div className="card">
          <div className="card-body">
            <h5 className="card-title">{this.state.post.title}</h5>
            <p className="card-text">{this.state.post.body}</p>
          </div>
      </div>
    ) : (
      <div className="text-center">Loading...</div>
    )
    
    return (
      <div className="container my-3">
        <h4>{post}</h4>
      </div>
    );
  }
}

export default Post;
