import React, { Component } from 'react'
import Products from '../../Components/Products/Products'

export default class SignIn extends Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Products',
          // fontSize:12,
          // height: 40, // TitleBar height in dp
          // alignItems:'center',
        },
        // height:40
        // drawBehind: true,
        // visible:false
      },
      bottomTabs:{
        // backgroundColor:'red',
        visible: true,
        drawBehind: false,
        // ...Platform.select({ android: { drawBehind: true } })
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