import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { goNewHome } from '../../Screens/navigation';
import {
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
  Button,
  ScrollView,
  Image,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';

const axios = require('axios');
export default class Login extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.componentId);

  }
  state = {
    email: '',
     password: '',
    //  isLoading: false,
      };

// handleChange = (e, { name, value }) => this.setState({ [name]: value });

 
  handleSubmit =  () => {
    axios.post('http://192.168.1.8:8000/api/auth',{email:this.state.email, password:this.state.password})
    .then(async (res) => {
      // console.warn(".plapla", res.data);
      await AsyncStorage.setItem('TOKEN', res.data);
      goNewHome()
    }).catch(err=>{
      console.warn("test error")
      // this.setState({isLoading: false})
      // console.log(err);
    })};
  render() {
    return (
      <ScrollView>
      <ImageBackground
        style={{ width: wp('100%'), height: hp('100%') , backgroundColor: "#fafafa"}}>
        <View style={styles.container}>
        {/* {(this.state.isLoading)? <ActivityIndicator size="large" color="#0000ff" />  : */}

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
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}
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
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
                // underlineColorAndroid='transparent'
              />
            </View>
          </View>

          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn} onPress={this.handleSubmit}>
              <Text style={{color:'#fff',fontWeight:"bold"}}>Sign in </Text>
            </TouchableOpacity>
          </View>


          <View style={{display:'flex', flexDirection:'row',justifyContent:'space-around'}}>
            <View style={styles.btnContainerForget}>
              <TouchableOpacity style={styles.btnForget} onPress={() => {
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
              }}>
                <Text style={{color:'#fff',fontWeight:"bold"}}>Sign Up </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnContainerForget}>
              <TouchableOpacity style={styles.btnForget} onPress={this.handleSubmit}>
                <Text style={{color:'#fff',fontWeight:"bold"}}>Forget Password </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* <View styles={styles.btnContainer}>
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

          </View> */}

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
    margin:wp('5%'),
    borderBottomWidth: 1,
    width: wp('90%'),
    padding: 12,
    borderColor:'rgba(138, 183, 222, 0.25)'  },
  btnContainerForget:{
    justifyContent: 'center',
    borderRadius: 10,
    // borderBottomWidth: 1,
    // width: wp('90%'),
    padding: 12,
    // borderColor:'rgba(138, 183, 222, 0.25)'  
  },
  btn: {    
    alignItems: 'center',
    backgroundColor: 'rgba(16,148,246,0.7)',
    padding: 10,
    color:'#fff',
    // marginTop:hp('2%'),
    borderRadius:50
  },
  btnForget: {    
    alignItems: 'center',
    backgroundColor: 'rgba(16,148,246,0.7)',
    padding: 10,
    color:'#fff',
    marginTop:hp('2%'),
    borderRadius:40
  },
  
  inputContainer: {
    borderColor: 'rgba(138, 183, 222, 0.25)',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderWidth: 1,
    width: wp('90%'),
    height: hp('9%'),
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
