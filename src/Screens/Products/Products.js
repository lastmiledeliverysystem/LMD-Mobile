import React, { Component } from 'react'
import Products from '../../Components/Products/Products'

export default class SignIn extends Component {
    static get options() {
        return {
          topBar: {
            title: {
              text: 'Products'
            },
          }
        };
      }
  render() {
    console.log(this.props)
    return (
      <Products vendorData={this.props} componentId= {this.props.componentId}/>
    )
  }
}