import React, { Component } from 'react'
import Shop from '../../Components/Shop/Shop'
export default class Vendors extends Component {
    static get options() {
        return {
          topBar: {
            title: {
              text: 'Shop'
            },
          }
        };
      }
  render() {
    return (
      <Shop componentId={this.props.componentId}  />
    )
  }
}
