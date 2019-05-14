import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    ScrollView
  } from 'react-native'
  import Shop from '../../Components/Shop/Shop';
  import {Navigation} from 'react-native-navigation';
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
