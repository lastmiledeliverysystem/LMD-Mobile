import React, { Component } from 'react';
import { View, Text,  ScrollView, FlatList, TouchableOpacity, StyleSheet, Image,ImageBackground,Dimensions, ActivityIndicator, } from 'react-native';
import {Navigation} from 'react-native-navigation';
import axios from 'axios';

//const axios = require('axios');
const { width, height } = Dimensions.get('window');

import { Rating, AirbnbRating } from 'react-native-ratings';
export default class Shop extends Component {

  state= {
    vendors:[],
    isLoading: false,
  }
    componentDidMount = () => {
      console.log("hereee")
      this.setState({isLoading:true}, ()=>{ 
        console.log("loading",this.state.isLoading)
        axios.get('http://192.168.1.14:8000/api/vendors')
        .then((res)=>{
          console.log("test test")
          console.log("res", res.data)
          this.setState({vendors:res.data , isLoading: false})
          console.log("loading",this.state.isLoading)
          console.log("vendors did mount", this.state.vendors[0].imageURL);
        }).catch(err=>{
          this.setState({isLoading:false})
          console.log("loading",this.state.isLoading)

          console.log("test error")
          console.log(err);
        })
      })
    }
  render() {
    return (
      <ImageBackground style={{width: width, height: height ,  backgroundColor:'#F2F3F4'}} >
       <View>
         {(this.state.isLoading)? <ActivityIndicator size="large" color="#0000ff" /> : 
          <FlatList
          data = {this.state.vendors}
              // data={[{name: 'Toys Vendor',phone:'1234',image:require('../../assets/toys.png') },{name: 'Nike',phone:'1234',image:require('../../assets/nike.jpg')},{name: 'Health Vendor',phone:'1234',image:require('../../assets/health.jpg')},{name: 'Vans',phone:'1234',image:require('../../assets/vans.png')}]}
              renderItem={({item}) => 
                    <View style={styles.container}>
                      <Image  style={styles.img} source={{uri:item.imageURL}} />
                <TouchableOpacity style={styles.button}
                    
                    onPress={() =>{
                            console.log(this.props.componentId, item)
                            Navigation.push(this.props.componentId, {
                            component: {
                                name: 'Products',
                                passProps: {
                                        name: item.name,
                                        vendorId: item._id
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
                      <Text style={styles.phone}> {item.category} </Text>
 
                      {/* <Text style={styles.phone}> {item.phone} </Text> */}
                      {/* <Rating style={styles.rating} imageSize={20} /> */}
                  </TouchableOpacity>
                      </View> 
                      }keyExtractor={(item, index) => index.toString()}/>
                    }
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
    width:width/5,
    height: height/5,
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
phone:{
	// color: 'black',
	fontSize: 10,
  marginTop: 20,
  // fontSize: 20,
  color:"#7D3C98",
  // marginLeft:width/9,
  // margin:width/9,
  fontWeight: 'bold',
  // fontSize: 15,
},
rating: {
  justifyContent: 'flex-start',
    flex:1,
}
// phone:{
// 	color: '#D68910',
// 	fontSize: 15,
//   marginTop: 20,
//   fontWeight: 'bold',
// },
})


