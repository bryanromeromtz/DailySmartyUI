import React, { Component } from 'react';

import { connect } from 'react-redux';

import Post from '../components/post';

class ResultsPosts extends Component {
  constructor(props) {
    super(props);

    this.renderPosts = this.renderPosts.bind(this);
  }

  renderPosts() {
    const posts = this.props.posts.map((post, index) => {

      return (
        <Post {...post} key={index} />
      )

    });
    return posts;
  }

  render() {
    return (
      <div className="results-posts">
        <div className="results-posts__wrapper">
          <ul className="results-posts__posts">
            {this.renderPosts()}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.resultsPosts
  }
}

export default connect(mapStateToProps)(ResultsPosts);
