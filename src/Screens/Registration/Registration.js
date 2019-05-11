import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
  } from 'react-native'

  import {Navigation} from 'react-native-navigation';
  import { goHome} from '../navigation'
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
      <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity
          onPress={goHome}
          style={styles.button}
        >
          <Text>Home</Text>
        </TouchableOpacity>
        </View>
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