import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

import Logo from "./logo";
import SearchBar from "./searchBar";
import RecentPosts from "./recentPosts";

class Home extends Component {


  handleSearchBarSubmit(query) {
    this.props.fetchPostsWithQuery(query, () => {
      this.props.history.push('/results');
    });
  }

  render() {
    return (
      <div className="app-wrapper">
        <div className='home'>
          <Logo />
          <SearchBar page="home" onSubmit={(query) => this.handleSearchBarSubmit(query)} />
          <RecentPosts />
        </div>
      </div>
    );
  }
}



export default connect(null, actions)(Home);