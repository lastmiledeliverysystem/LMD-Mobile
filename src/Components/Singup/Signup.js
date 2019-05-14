import React, { Component } from 'react';
import { TextInput,View,ImageBackground,StyleSheet,Text,Button,Image} from 'react-native';
import { Dimensions } from 'react-native'

export default class Login extends Component {
constructor (props){
  super(props);
  state = {
    email   : '',
    password: '',
}}


render() {
return (
  <ImageBackground style={{width: width, height: height}} 
  source={{uri: 'https://i.ytimg.com/vi/v1SabYdIlZI/maxresdefault.jpg'}} >

  <Image style={{marginLeft:width/4,width:200, height: 150,marginTop:height/9}} 
  source={{uri: 'https://image.flaticon.com/icons/png/512/671/671387.png'}} />

  <View style={styles.container}> 
    <View style={styles.inputContainer}>
      <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
      <TextInput style={styles.inputs}
          placeholder="Email"
          keyboardType="email-address"
          // underlineColorAndroid='transparent'
          />
    </View>

    <View style={styles.inputContainer}>
      <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
      <TextInput style={styles.inputs}
          placeholder="Password"
          // underlineColorAndroid='transparent'
          />
    </View>
  </View>

  <View style={styles.buttonStyle}>
  <Button color="#1e90ff" title="Sign Up" />
  </View>

  </ImageBackground>

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

