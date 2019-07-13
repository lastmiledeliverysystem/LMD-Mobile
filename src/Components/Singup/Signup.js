import React, { Component } from 'react';
import { TextInput,ScrollView,View,ImageBackground,StyleSheet,Text,Button,Image} from 'react-native';
import { Dimensions } from 'react-native'
import { goNewHome } from '../../Screens/navigation';

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
  <ImageBackground style={{width: width, height: height}} 
  source={require('../../assets/background.jpg')} >
  <View>

  <View > 
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
  </View>

  <View style={styles.buttonStyle}>
  <Button
  onPress = {goNewHome}
  color="#1e90ff" title="Create account " />
  </View>

  </View>
  </ImageBackground>
  </ScrollView>
)
}};
     
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container:{
    marginTop:height /8
  },

  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:width-40 ,
      padding: 12,
      marginBottom:20,
      marginLeft:20,
      marginTop:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
},
inputIcon:{
  width:30,
  height:30,
  marginLeft:10,
  justifyContent: 'center'
},
textStyle:{ 
  color:"#1e90ff",
  marginLeft:width/6,
  marginRight:width/9,
  fontWeight: 'bold',
  fontSize: 15,
},

SignUpStyle:{   
  color:"#1e90ff",
  marginLeft:width/6,
  fontWeight: 'bold',
  fontSize: 15,
 },
buttonStyle:{
  borderRadius:30,
  borderBottomWidth: 1,
  width:width-40 ,
  padding: 12,
  marginBottom:20,
  marginLeft:20,
  
}})

