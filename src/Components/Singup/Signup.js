import React, { Component } from 'react';
import { TextInput,ScrollView,View,ImageBackground,StyleSheet,Text,TouchableOpacity,Image} from 'react-native';
import { Dimensions } from 'react-native'
import { goNewHome } from '../../Screens/navigation';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class Login extends Component {
constructor (props){
  super(props);
  state = {
    email   : '',
    password: '',
}}


render() {
return (
  <ScrollView>
  <ImageBackground  style={{ width: width, height: height , backgroundColor: "#fafafa"}}>

  <View  style={styles.container}> 
    <View style={styles.inputContainer}>
      <Image style={styles.inputIcon} source={require('../../assets/pen.png')}/>
      <TextInput style={styles.inputs}
          placeholder="First Name"
          />
    </View>

    <View style={styles.inputContainer}>
      <Image style={styles.inputIcon} source={require('../../assets/pen.png')}/>
      <TextInput style={styles.inputs}
          placeholder="Second Name"
        
          />
    </View>
    <View style={styles.inputContainer}>
      <Image style={styles.inputIcon} source={require('../../assets/email.png')}/>
      <TextInput style={styles.inputs}
          placeholder="Email"
          keyboardType="email-address"
          
          />
    </View>
    <View style={styles.inputContainer}>
      <Image style={styles.inputIcon} source={require('../../assets/key.png')}/>
      <TextInput style={styles.inputs}
          placeholder="Password"
          keyboardType="visible-password"
         
          />
    </View>
    <View style={styles.inputContainer}>
      <Image style={styles.inputIcon} source={require("../../assets/pickup-point.png")}/>
      <TextInput style={styles.inputs}
          placeholder="Address"
          />
    </View>
    <View style={styles.inputContainer}>
      <Image style={styles.inputIcon} source={require("../../assets/image.png")}/>
      <TextInput style={styles.inputs}
          placeholder="Picture"
          />
    </View>
    <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn} onPress= {goNewHome}>
              <Text style={{color:'#fff',fontWeight:"bold"}}>Create account </Text>
            </TouchableOpacity>
          </View>
  </View>
  </ImageBackground>
  </ScrollView>
)
}};
     
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({

  container:{
    marginTop:hp('3%'),
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
    width: wp('90%'),
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
  }})

