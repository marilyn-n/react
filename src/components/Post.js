import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Post extends Component {

 handleClick = () => {
  this.props.deletePost(this.props.post.id)
  this.props.history.push('/blog')
}

  render() {       
    const post = this.props.post ? (
      <div className="card">
          <div className="card-body">
            <h5 className="card-title">{this.props.post.title}</h5>
            <p className="card-text">{this.props.post.body}</p>
            <button className="btn btn-danger" onClick={this.handleClick}>Delete Post</button>
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

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id
  return {
    post: state.posts.find(item => item.id === id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => { dispatch({ type: 'DELTE_POST', id: id }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
