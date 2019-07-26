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
  Image
} from 'react-native';
import { Dimensions } from 'react-native';

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
      <ImageBackground
        style={{ width: width, height: height , backgroundColor: "#fafafa"}}
        // source={require('../../assets/background.jpg')}
      >
        <View style={styles.container}>
          <Image
            style={{
              width: 200,
              height: 150,
              marginTop: 10
            }}
            source={{
              uri: 'https://image.flaticon.com/icons/png/512/671/671387.png'
            }}
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
            <Button styles={{marginTop: 20,}} title='HEllo'/>
          </View>
        </View>
      </ImageBackground>
    );
  }

}


{/* <View >
          <TouchableOpacity style={styles.textStyle}>
            <Text style={styles.textStyle}>Forget password </Text>
            </TouchableOpacity>  

            <TouchableOpacity style={styles.textStyle} onPress={() => {
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
                });
              }}>
              <Text style={styles.textStyle}>Sign Up </Text>
            </TouchableOpacity>
          </View> */}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({

  container:{
    //  marginTop:height/8,
    justifyContent: 'center',
    alignItems:'center',
  },
  btnContainer:{
    justifyContent: 'center',

    borderRadius: 30,
    borderBottomWidth: 1,
    width: width - 40,
    padding: 12,
    borderColor:'rgba(138, 183, 222, 0.25)'  },
  btn: {    
    alignItems: 'center',
    backgroundColor: 'rgba(16,148,246,0.7)',
    padding: 10,
    color:'#fff',
    marginTop:10,
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
    marginTop: 20,
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
    width: 30,
    height: 30,
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
    width: width - 40,
    padding: 12,
    marginBottom: 20,
    marginLeft: 20,
    borderColor:'rgba(138, 183, 222, 0.25)'
  }
});
