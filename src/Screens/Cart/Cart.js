import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ShoppingCart from '../../Components/ShoppingCart/ShoppingCart';
export default class Cart extends Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Shopping Cart'
        }
      }
    };
  }
  render() {
    return (
      <View>
        <ShoppingCart />
      </View>
    );
  }
}
