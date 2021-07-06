import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SearchBar extends Component {

  handleFormSubmit = function ({ query }) {
    this.props.onSubmit(query);
  }

  renderInput(field) {
    return (
      <input type="text" placeholder="Search DailySmarty..." {...field.input} />
    )
  }

  render() {

    const { handleSubmit } = this.props;

    return (
      <div className="search-bar__wrapper">
        <form className="search-bar" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field name="query" component={this.renderInput} />
        </form>
        <p className="search-bar__message">press return to search</p>
      </div>

    )
  }
}

SearchBar = reduxForm({
  form: 'searchBar'
})(SearchBar);

SearchBar = withRouter(SearchBar);
export default SearchBar;