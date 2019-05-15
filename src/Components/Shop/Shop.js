import React, { Component } from 'react';
import { View, Text,  ScrollView, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {Navigation} from 'react-native-navigation';
const axios = require('axios');


export default class Shop extends Component {
  state= {
    vendors:[],
  }

    componentDidMount = () => {
      console.log("vendors did mount", this.state.vendors);
      axios.get('http://localhost:8000/api/vendors')
      .then((res)=>{
          this.setState({vendors:res.data.vendor})
      }).catch(err=>{
        console.log(err);
      })
    }
  render() {
    return (
       <View>
          <FlatList
              data={this.state.vendors}
              renderItem={({item}) => 
                <TouchableOpacity style={styles.border}>
                    <View style={styles.wrapper}>
                      <Image source={require('../../assets/shop.png')} />
                <TouchableOpacity 
                    style={styles.button}
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
                      <Text> {item.price} </Text>
                  </TouchableOpacity>
                      </View>
                    </TouchableOpacity>

                            }/>
          </View>
    )}
  }
const styles = StyleSheet.create({
  border:{
    borderColor: 'black',
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: 'black'
  },
  wrapper:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button:{
    padding: 10,
    marginTop: 10,
    borderWidth:1,
    borderColor: 'black',
    justifyContent:'center',
    alignItems: 'center',
    width: '70%',
    borderRadius:5
  },
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


