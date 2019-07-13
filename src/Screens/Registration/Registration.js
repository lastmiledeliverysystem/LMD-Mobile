import React, { Component } from 'react'
import Signup from '../../Components/Singup/Signup'
import {View} from 'react-native'

export default class Registration extends Component {
    static get options() {
        return {
          topBar: {
            title: {
              text: 'Registration'
            },
          }
        };
      }
  render() {
    return (
        <Signup componentId= {this.props.componentId}/>
    )
  }
}

