import React , { Component } from 'react';
import { Navigation } from 'react-native-navigation'
import { TextInput,View,TouchableOpacity,ImageBackground,StyleSheet,Text,Button,Image} from 'react-native';
import { Dimensions } from 'react-native'


export default class Forgetpass extends Component{


    render(){
        return(
            <ImageBackground style={{width: width, height: height}} 
            source={require('../../assets/background.jpg')}  >
            <Text>Please entre your Email !</Text>
            </ImageBackground>

        )

        
    }
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
})