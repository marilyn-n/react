import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bestbooks from '../assets/bestbooks.jpg';
import { connect } from 'react-redux';

export class Blog extends Component {
  render() {
    const posts = this.props.posts;
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
            No posts here
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

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Blog);
