import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bestbooks from '../assets/bestbooks.jpg';

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
              <Link to={'/' + item.id }><h5 className="card-title article-title">{item.title}</h5></Link>
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
      <div>
        <div>
            <img src={Bestbooks} className="w-100" height="250" alt="best-articles"/>
            <h1 className="text-center my-auto mx-auto">Blog</h1>
        </div>
        <div className="container posts-list">
          {postList}
        </div>
      </div>
    );
  }
}

export default Blog;
