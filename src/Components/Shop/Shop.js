import React, { Component } from 'react';
import { View, Text,  ScrollView, FlatList, TouchableOpacity, StyleSheet, Image,ImageBackground,Dimensions, ActivityIndicator, } from 'react-native';
import {Navigation} from 'react-native-navigation';
import axios from 'axios';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Rating, AirbnbRating } from 'react-native-elements';

//const axios = require('axios');
const { width, height } = Dimensions.get('window');

export default class Shop extends Component {

  state= {
    vendors:[],
    isLoading: false,
  }
    componentDidMount = () => {
      console.log("hereee")
      this.setState({isLoading:true}, ()=>{ 
        console.log("loading",this.state.isLoading)
        axios.get('http://192.168.1.8:8000/api/vendors')
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
      <ImageBackground style={{width: width, height: hp('77%'), backgroundColor: "#f0f0f0"}} >
       <View style={{alignItems:'center'}}>
         {(this.state.isLoading)? <ActivityIndicator size="large" color="#0000ff" /> : 
          <FlatList
          horizontal={false}
          numColumns={2}
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
                <Rating
                  imageSize={20}
                  style={{ paddingTop: 10 }}
                />
                {/* {console.log(item)} */}
                {/* <Text style={styles.phone}> {item.category} </Text> */}
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
  fontSize: 20,
  padding:0,
  marginTop:hp('1%'),
  textAlign:'center'
  // marginLeft:wp('2%'),
},
phone:{
  // color: 'black',
	fontSize: 10,
  // marginTop: 20,
  // fontSize: 20,
  color:"gray",
  // marginLeft:width/9,
  // margin:width/9,
  fontWeight: 'bold',
  padding:0,
  margin:0,
  // marginLeft:wp('2%'),
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


