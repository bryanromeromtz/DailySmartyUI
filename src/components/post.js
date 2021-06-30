import React, { Component } from 'react'

export default class Post extends Component {


  render() {
    return (
      <div>
        <li>
          {this.props.title}
        </li>
      </div>
    )
  }
}
