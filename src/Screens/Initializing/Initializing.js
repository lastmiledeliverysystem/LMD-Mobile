import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native'
import {goNewHome, goHome} from '../navigation'
export default class Initializing extends React.Component {

    componentDidMount(){
      setTimeout(()=>{
        goNewHome()
      }, 1000)
    }
    render() {
      return (
        <View style={styles.container}>

          <Text style={styles.welcome}>Loading</Text>
          <ActivityIndicator size = "large" color="#0000ff" />
        </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    welcome: {
      fontSize: 28
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
