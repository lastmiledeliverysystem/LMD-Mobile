import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
  Button,
  ScrollView,
  Image
} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.componentId);

    state = {
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <ScrollView>
      <ImageBackground
        style={{ width: wp('100%'), height: hp('100%') , backgroundColor: "#fafafa"}}
        // source={require('../../assets/background.jpg')}
      >
        <View style={styles.container}>
          <Image
            style={{
              width: 200,
              height: 150,
              marginTop: 10
            }}
            source={require('../../assets/car.png')}
          />

          <View>
            <View style={styles.inputContainer}>
              <Image
                style={styles.inputIcon}
                source={require('../../assets/email.png')}
              />
              <TextInput
                style={styles.inputs}
                placeholder='Email'
                keyboardType='email-address'
              />
            </View>

            <View style={styles.inputContainer}>
              <Image
                style={styles.inputIcon}
                source={require('../../assets/key.png')}
              />
              <TextInput
                style={styles.inputs}
                placeholder='Password'
                // underlineColorAndroid='transparent'
              />
            </View>
          </View>

          {/* <View style={styles.buttonStyle}>
            <Button color='#1e90ff' title='LogIn' onPress={()=>null}/>
          </View> */}

          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn} onPress={this.goToVendors}>
              <Text style={{color:'#fff',fontWeight:"bold"}}>Sign in </Text>
            </TouchableOpacity>
          </View>

          <View styles={styles.btnContainer}>
            <Button styles={{marginTop: 20,}} title='HEllo' onPress={() => {
                Navigation.push(this.props.componentId, {
                  component: {
                    name: 'Registration'
                  },
                  passProps: {
                    name: 'Registration'
                  },
                  options: {
                    topBar: {
                      title: {
                        text: 'Registration'
                      }
                    }
                  }
                })
              }}/>
          </View>
        </View>
      </ImageBackground>
      </ScrollView>

    );
  }}

const styles = StyleSheet.create({
  container:{
    marginTop:hp('8%'),
    justifyContent: 'center',
    alignItems:'center',
  },
  btnContainer:{
    justifyContent: 'center',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: wp('90%'),
    padding: 12,
    borderColor:'rgba(138, 183, 222, 0.25)'  },

  btn: {    
    alignItems: 'center',
    backgroundColor: 'rgba(16,148,246,0.7)',
    padding: 10,
    color:'#fff',
    marginTop:hp('2%'),
    borderRadius:50
  },
  
  inputContainer: {
    borderColor: 'rgba(138, 183, 222, 0.25)',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderWidth: 1,
    // width: width - 40,
    width: wp('80%'),
    height: hp('8%'),
    padding: 12,
    marginTop:hp('3%'),
    flexDirection: 'row',
    alignItems: 'center',
   
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
   
  },
  inputIcon: {
    width: wp('5%'),
    height: hp('2%'),
    marginLeft: 10,
    justifyContent: 'center'
  },
  textStyle: {
    color: '#1e90ff',
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 15
  },
  buttonStyle: {
    borderRadius: 30,
    borderBottomWidth: 1,
    width: wp('80%'),
    padding: 12,
    marginBottom: 20,
    marginLeft: 20,
    borderColor:'rgba(138, 183, 222, 0.25)'
  }
});
