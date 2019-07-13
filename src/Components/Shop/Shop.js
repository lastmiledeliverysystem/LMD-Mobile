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
          <FlatList
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
                      <Text style={styles.phone}> {item.phone} </Text>
                  </TouchableOpacity>
                      </View>

                            } keyExtractor={(item, index) => index.toString()}/>
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
phone:{
	color: 'black',
	fontSize: 15,
  marginTop: 20
},
})


