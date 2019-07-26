import React, { Component } from 'react'
import Product from '../../Components/Product/Product'

export default class ProductPage extends Component {
    static get options() {
        return {
          topBar: {
            title: {
              text: 'Product'
            },
          }
        };
      }
  render() {
    console.log(this.props)
    return (
      <Product productData={this.props} componentId= {this.props.componentId}/>
    )
  }
}