import React, { Component } from 'react';

export class Blog extends Component {
  state = {
    posts: [ ],
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        this.setState({
          posts: data.slice(0,10)
        })
      })      
  }


  render() {
    const posts = this.state.posts;

    const postList = posts.length ? 
    ( posts.map(item => {
        return (
          <div className="card m-3" key={item.id}>
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.body}</p>
            </div>
          </div>
        )
      }
    )
    ) : (
      <div className="container m-3">
        <div className="card text-center">
            No posts yet :-(
        </div>
      </div>
    )
    
    
    return (
      <div className="container posts-list">
        {postList}
      </div>
    );
  }
}

export default Blog;
