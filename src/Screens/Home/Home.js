// Home.js
import React from 'react'
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  AsyncStorage
} from 'react-native'
import {Navigation} from 'react-native-navigation';
export default class Home extends React.Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Home'
        },
      }
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <TouchableOpacity
            onPress={() => {
              Navigation.push(this.props.componentId, {
                component: {
                  name: 'Vendors',
                },
                passProps: {
                  name: 'test'
                },
                options: {
                  topBar: {
                    title: {
                      text: 'Vendors'
                    }
                  }
                }
              });
            }}
            style={styles.button}
          >
            <Text>Shop</Text>
          </TouchableOpacity>
            <TouchableOpacity
            onPress={() => {
              Navigation.push(this.props.componentId, {
                component: {
                  name: 'Cart',
                },
                passProps: {
                  type: 'Cart'
                },
                options: {
                  topBar: {
                    title: {
                      text: 'Cart'
                    }
                  }
                }
              });
            }}
            style={styles.button}
          >
            <Text>Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Navigation.push(this.props.componentId, {
                component: {
                  name: 'SignIn',
                },
                passProps: {
                  type: 'Login'
                },
                options: {
                  topBar: {
                    title: {
                      text: 'Sign In'
                    }
                  }
                }
              });
            }}
            style={styles.button}
          >
            <Text>Login</Text>
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