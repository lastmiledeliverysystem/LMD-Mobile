import React, { Component } from 'react';
import { View, Text,  ScrollView, FlatList, TouchableOpacity, StyleSheet, Image,ImageBackground,Dimensions , ActivityIndicator} from 'react-native';
import {Navigation} from 'react-native-navigation';
import FontAwesome, { Icons } from 'react-native-fontawesome';
const axios = require('axios');
const { width, height } = Dimensions.get('window');
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Button } from 'native-base';



export default class Shop extends Component {

    state={
      products: [],
      isLoading: false,
    }
  componentDidMount = () => {
    console.log("hereee")
    this.setState({isLoading: true}, ()=> {
      axios.get('http://192.168.10.23:8000/api/products/'+this.props.vendorData.vendorId)
      .then((res)=>{
        console.log("test test")
        console.log("res", res.data)
        this.setState({products:res.data, isLoading: false})
        console.log("prodycts did mount", this.state.products);
      }).catch(err=>{
        console.log("test error")
        this.setState({isLoading: false})
        console.log(err);
      })
    })
  }
  
  render() {
    console.log("this props", this.props)
    // const { navigation } = this.props;
    // const vendorId = navigation.getParam('vendorId', 'NO-ID');
    console.log("vendor id in products", this.props.vendorData.vendorId)
    return (
      <ImageBackground style={{width: width, height: height , backgroundColor:'#F2F3F4'}} >
       <View>
         {(this.state.isLoading)? <ActivityIndicator size="large" color="#0000ff" /> : 
          <FlatList
              // data={[{name: 'Checkerboard Slip-On',phone:'1234',image:require('../../assets/shoes.jpg') },{name: 'Warped Tour 25 Years Sk8-Hi',phone:'1234',image:require('../../assets/shoes2.jpg')},{name: 'Pig Suede Old Skool',phone:'1234',image:require('../../assets/shoes3.jpg')},{name: 'Anaheim Factory Sid DX',phone:'1234',image:require('../../assets/shoes4.jpg')}]}
              data={this.state.products}
              renderItem={({item}) => 
                    <View style={styles.container}>
                
                      <Image  style={styles.img} source={{uri:item.image}} />
                <TouchableOpacity style={styles.button}
                    
                    onPress={() =>{
                            console.log(this.props.componentId)
                            Navigation.push(this.props.componentId, {
                            component: {
                                name: 'Product',
                                passProps: {
                                        name: item.name,
                                        description: item.description,
                                        price: item.price,
                                        image: item.image
                                           },
                                       },
                                options: {
                                      topBar: {
                                        title: {
                                          text: 'Product'
                                               }
                                              }
                                          }
                                 });
      
                                    }
                              }>
                      <Text style={styles.name}>{item.name}</Text>
                      <Text style={styles.price}> {item.price}LE </Text>
                      <FontAwesome>{Icons.heart}</FontAwesome>
                  </TouchableOpacity>
                      </View>

                            } keyExtractor={(item, index) => index.toString()}/>
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
  margin: 10,
  fontSize: 15,
  color:"#7D3C98",
  // marginLeft:width/9,
  // margin:width/9,
  fontWeight: 'bold',
},
price:{
	color: 'black',
	fontSize: 15,
  marginTop: 20,
  flex:0.5,
  padding: 10,
  borderTopRightRadius:10,
  borderBottomRightRadius:10,
  backgroundColor: '#F2F3F4',
},
})


