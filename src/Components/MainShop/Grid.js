import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, Image, TouchableOpacity } from 'react-native';
import {Navigation} from 'react-native-navigation';

const data = [
    { key: require('../../assets/food.jpg'), name:'Food' },
    { key: require('../../assets/pha.jpg'), name:'Medical' },
    { key: require('../../assets/cloth.jpg'), name:'Fashion' }
];

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 3;
export default class App extends React.Component {
  renderItem = ({ item }) => {
    if (item.empty === true) {
        return <View style={[styles.item, styles.itemInvisible]} />;
      }
    return (
        <React.Fragment>
          <TouchableOpacity style={styles.item} onPress={this.goToVendors}>
            <Image style={{height: '90%',width:'100%'}} source={item.key} />
            <Text style={{color:'#666', fontStyle:'italic', fontSize:10}}>{item.name}</Text>
          </TouchableOpacity>
        </React.Fragment>
    );
  };

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
    console.log(this.props.componentId);
    return (
      <FlatList
      data={formatData(data,numColumns)}
      renderItem={this.renderItem}
      numColumns={3}
      />
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  item: {
    // backgroundColor: '#4D243D',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 3,
    color: '#fff',
    height: Dimensions.get('window').width / numColumns  , // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
  aa:{
    
  }
});