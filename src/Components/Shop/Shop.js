import React, { Component } from 'react';
import { View, Text,  ScrollView, FlatList, TouchableOpacity, StyleSheet, Image,ImageBackground,Dimensions } from 'react-native';
import {Navigation} from 'react-native-navigation';
const axios = require('axios');
const { width, height } = Dimensions.get('window');

import { Rating, AirbnbRating } from 'react-native-ratings';
export default class Shop extends Component {
  // state= {
  //   vendors:[],
  // }

  //   componentDidMount = () => {
  //     console.log("vendors did mount", this.state.vendors);
  //     axios.get('http://localhost:8000/api/vendors')
  //     .then((res)=>{
  //         this.setState({vendors:res.data.vendor})
  //     }).catch(err=>{
  //       console.log(err);
  //     })
  //   }
  render() {
    return (
      <ImageBackground style={{width: width, height: height ,  backgroundColor:'#F2F3F4'}} >
       <View>
          <FlatList
              data={[{name: 'Toys Vendor',phone:'Phone: 12354154',image:require('../../assets/toys.png') },{name: 'Nike',phone:'Phone: 12354154',image:require('../../assets/nike.jpg')},{name: 'Health Vendor',phone:'Phone: 12354154',image:require('../../assets/health.jpg')},{name: 'Vans',phone:'Phone: 12354154',image:require('../../assets/vans.png')}]}
              renderItem={({item}) => 
                    <View style={styles.container}>
                      <Image  style={styles.img} source={item.image} />
                <TouchableOpacity style={styles.button}
                    
                    onPress={() =>{
                            console.log(this.props.componentId)
                            Navigation.push(this.props.componentId, {
                            component: {
                                name: 'Products',
                                passProps: {
                                        name: item.name,
                                           },
                                       },
                                options: {
                                      topBar: {
                                        title: {
                                          text: 'Products'
                                               }
                                              }
                                          }
                                 });
      
                                    }
                              }>
                      <Text style={styles.name}>{item.name}</Text>
 
 
                      <Text style={styles.phone}> {item.phone} </Text>
                      {/* <Rating   imageSize={30} /> */}
                  </TouchableOpacity>
                      </View> 
                      }keyExtractor={(item, index) => index.toString()}/>
          </View>
          </ImageBackground>

    )}
  }
const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    marginTop: 5,
    marginLeft: 5,
    flex:1,
    marginRight: 5,
    
  },
  button: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex:1,
    padding: 10,
    borderTopRightRadius:15,
    borderBottomRightRadius:15,
    backgroundColor: 'white',
    
  },
  wrapper:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  img:{
    flexDirection: 'column',
    flex:1,
    width:width/5,
    height: height/5,
    borderTopLeftRadius:15,
    borderBottomLeftRadius:15,
  },
name:{
	color: 'black',
	fontSize: 20,
},
name:{
	// color: 'black',
	// fontSize: 15,
  marginTop: 20,
  fontSize: 20,
  color:"#7D3C98",
  // marginLeft:width/9,
  // margin:width/9,
  fontWeight: 'bold',
  // fontSize: 15,
},
phone:{
	color: '#D68910',
	fontSize: 15,
  marginTop: 20,
  fontWeight: 'bold',
},
})


