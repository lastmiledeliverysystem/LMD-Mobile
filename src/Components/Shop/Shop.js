import React, { Component } from 'react';
import { View, Text,  ScrollView, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import {Navigation} from 'react-native-navigation';


export default class Shop extends Component {
  render() {
    return (
          <FlatList
        data={[{name: 'Vendor1'}, {name: 'Vendor2'}]}
        renderItem={
          ({item}) => <TouchableOpacity
          onPress={ async () => 
            {
              try{
                await Navigation.push(this.props.componentId, {
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
              }catch(err){
                <Text>ERROR</Text>
              }
              
          }
        }
          style={styles.button}
        >
          <Text>{item.name}</Text>
        </TouchableOpacity>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
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
})