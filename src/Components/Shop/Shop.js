import React, { Component } from 'react';
import { View, Text,  ScrollView, FlatList, TouchableOpacity, StyleSheet, Image,ImageBackground,Dimensions } from 'react-native';
import {Navigation} from 'react-native-navigation';
const axios = require('axios');
const { width, height } = Dimensions.get('window');


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
      <ImageBackground style={{width: width, height: height}} 
  source={require('../../assets/background.jpg')} >
       <View>
          <ScrollView
              data={[{name: 'Adidas',phone:'1234' },{name: 'Akalny',phone:'1234'},{name: 'Medical',phone:'1234'},{name: 'Pizza Mania',phone:'1234'}]}
              renderItem={({item}) => 
                    <View style={styles.container}>
                
                      <Image  style={styles.img} source={require('../../assets/food.jpg')} />
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
                      <Text> {item.phone} </Text>
                  </TouchableOpacity>
                      </View>

                            }/>
          </View>
          </ImageBackground>

    )}
  }
const styles = StyleSheet.create({
  border:{
    borderColor: 'black',
  },
  container: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    borderWidth:1,
    borderColor: 'black',
    margin: 10,
  },
  button: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 20,
    // margin: 10,
    backgroundColor: 'white',
    width: '50%',
  },
  wrapper:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  img:{
    flexDirection: 'column',
    width:width/2,
    height: height/4,
  },
  // button:{
 
  //   justifyContent:'center',
  //   alignItems: 'center',
  //   width: '70%',
  //   borderRadius:5
  // },
//   card:{
//     backgroundColor: '#ffff',
//     height: 200,
//     width: 150,
//     borderRadius: 14,
//     margin: 18,
//     marginTop: 20,
//     // boxShadow: '0 5px 15px rgba(0, 0, 0, 0.15)',
//   },
//   image:{
// 	width: '100%',
//   height: '100%'
// },
// name:{
// 	color: 'black',
// 	fontSize: 20,
// },
// price:{
// 	color: 'black',
// 	fontSize: 15,
// 	marginTop: 4,
// },
})


