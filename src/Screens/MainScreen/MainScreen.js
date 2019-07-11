import React, { Component } from 'react'
import MainShop from '../../Components/MainShop/MainShop'

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
  } from 'react-native'
  import { goHome} from '../navigation'

  import {Navigation} from 'react-native-navigation';
export default class SignIn extends Component {
    static get options() {
        return {
          topBar: {
            title: {
              text: 'Shop',
              fontSize:12,
              height: 40, // TitleBar height in dp
            },
            height:40
            // drawBehind: true,
            // visible:false
          },
          bottomTabs:{
            // backgroundColor:'red'
          }
        };
      }
  render() {
    return (
      <View>
        <MainShop componentId= {this.props.componentId}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  wrapper:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button:{
    padding: 10,
    marginTop: 10,
    borderWidth:1,
    borderColor: 'black',
    justifyContent:'center',
    alignItems: 'center',
    width: '70%',
    borderRadius:5
  },
})