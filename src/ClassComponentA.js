import React, { Component } from 'react'

export default class ClassComponentA extends Component {
  render() {
    return (
      <div>
        <center>
        {this.props.data.map(product => <li key={product.id}>{product.first_name}</li>)}
        </center>
      </div>
    )
  }
}
