import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Shop from '../../Components/Shop/Shop'
export default class Vendors extends Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Shop',
          // fontSize:25,
          // height:100, // TitleBar height in dp
          // alignment: 'left', // Center title
        },
        // height:hp('15%')
        // drawBehind: true,
        // visible:false
      },
      bottomTabs:{
        // backgroundColor:'red',
        // visible: true,
        drawBehind: false,
        // ...Platform.select({ android: { drawBehind: true } })
      }
    };
  }
  render() {
    return (
      <Shop componentId={this.props.componentId}  />
    )
  }
}
