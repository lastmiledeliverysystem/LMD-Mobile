import React, { Component,Fragment } from 'react';
import { Button ,View, Text,Dimensions, FlatList, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import {Navigation} from 'react-native-navigation';
import GridData from './Grid';
import {Item, Input, Icon } from 'native-base';

export default class Shop extends Component {

  goToVendors = ()=>{
    console.log(this.props.componentId);
    Navigation.push(this.props.componentId, {
      component: {
        name: 'Vendors',
      },
      passProps: {
        name: 'Vendors'
      },
      options: {
        topBar: {
          title: {
            text: 'Vendors'
          },
        }
      }
    });
  }
  
  render() {
    return (

      <React.Fragment>
         <Item>
            <Input placeholder="Search" />
            <Button  title='Search' transparent/>
          </Item>

        <ImageBackground source={require("../../assets/street.jpg")} style={styles.headerBackground}>
          <Text style={styles.header}>LMD/DADA</Text>
          <Text style={styles.subHeader}>Whatever you need, wherever you are</Text>
        </ImageBackground>
  
        <Button  title='go to Shop'  onPress={this.goToVendors}/>
        <View style={styles.vw}>
          <Text style={styles.h}>Top Categories</Text>
          <GridData componentId={this.props.componentId}/>
        </View>
      </React.Fragment>
    );
  }
}
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  headerBackground: {
    width:width,
    height:height/4,
    paddingTop:height/14,
    marginBottom:20,
    // paddingLeft:20
  },

  // gotoshop: {
  //     // justifyContent: 'space-around',
  //     margin:20,
  //     flex:1,
  //     marginRight: 5,
      
  //   },
  header:{
    fontSize:30,
    // color:'#1d064b',
    color:'#fff',
    fontWeight:'bold',
    textAlign:'center',
    textShadowColor:'rgba(0,0,0,0.6)',
    textShadowOffset:{width: .3, height: .3},
    textShadowRadius:.3
  },
  subHeader:{
    fontSize:15,
    color:'white',
    fontWeight:'bold',
    textShadowColor:'rgba(0,0,0,0.6)',
    textShadowOffset:{width: .3, height: .3},
    textShadowRadius:.3,
    textAlign:'center'
  },
  h:{
    fontSize:20,
    color:'#000',
    textAlign:'center',
    marginBottom:2
  },
  vw:{
    // marginTop:10,
    padding:10
  }

})