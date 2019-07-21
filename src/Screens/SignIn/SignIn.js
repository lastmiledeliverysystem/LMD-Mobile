import React, { Component } from 'react'
import {View,StyleSheet,} from 'react-native'
import Login from '../../Components/Login/Login'

export default class SignIn extends Component {
    static get options() {
        return {
          topBar: {
            title: {
              text: 'Sign in'
            },
            background: {
              color: '#fff',
            }
          }
        };
      }
  render() {
    console.log(this.props)
    return (
      <Login componentId= {this.props.componentId}/>
    )
  }
}
