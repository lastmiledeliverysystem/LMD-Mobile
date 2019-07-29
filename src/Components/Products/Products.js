import React, { Component } from 'react';
import { View, Text,  ScrollView, FlatList, TouchableOpacity, StyleSheet, Image,ImageBackground,Dimensions , ActivityIndicator} from 'react-native';
import {Navigation} from 'react-native-navigation';
import FontAwesome, { Icons } from 'react-native-fontawesome';
// import { Rating, AirbnbRating } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const axios = require('axios');
const { width, height } = Dimensions.get('window');
// import { Rating, AirbnbRating } from 'react-native-ratings';
import { Button } from 'native-base';



export default class Shop extends Component {

    state={
      products: [],
      isLoading: false,
      starCount:3.5
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

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
  
  render() {
    console.log("this props", this.props)
    // const { navigation } = this.props;
    // const vendorId = navigation.getParam('vendorId', 'NO-ID');
    console.log("vendor id in products", this.props.vendorData.vendorId)
    return (
      <ImageBackground style={{width: width, height: hp('80%'),backgroundColor: "#f0f0f0"}} 
       >
        <View style={{alignItems:'center'}}>
         {(this.state.isLoading)? <ActivityIndicator size="large" color="#0000ff" /> : 
          <FlatList
            // data={[{name: 'Checkerboard Slip-On',phone:'1234',image:require('../../assets/shoes.jpg') },{name: 'Warped Tour 25 Years Sk8-Hi',phone:'1234',image:require('../../assets/shoes2.jpg')},{name: 'Pig Suede Old Skool',phone:'1234',image:require('../../assets/shoes3.jpg')},{name: 'Anaheim Factory Sid DX',phone:'1234',image:require('../../assets/shoes4.jpg')}]}
            horizontal={false}
            numColumns={2}
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
                  {/* <Text style={styles.name}>{item.name > 5 ?item.name.substring(0,5):item.name}</Text> */}
                  <Text style={styles.name}>{item.name.length > 20 ?item.name.substring(0,15):item.name}</Text>
                  <Text style={styles.name}> {item.price}LE </Text>
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
    flexDirection: 'column',
    // justifyContent: 'space-around',
    marginTop: hp('1%'),
    marginLeft: wp('2%'),
    marginRight: wp('2%'),
    // marginLeft: 5,
    // flex:1,
    alignSelf:'center',
    marginRight: 0,
    height:hp('30%'),
    width: wp('45%'),
    borderColor: 'rgba(138, 183, 222, 0.0)',
    borderWidth: 1,
    borderRadius:10,
    
  },
  button: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex:5,
    alignItems:'center',
    // padding: 10,
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
    backgroundColor: 'white',
    // width:width/5,
    // height: height/5,
  },
  wrapper:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  img:{
    flexDirection: 'column',
    flex:5,
    // width: wp('20%'),
    // height: hp('20%'),
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
  },
name:{
	color: 'black',
  fontSize: 15,
  padding:0,
  marginTop:hp('1%'),
  textAlign:'center'
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


