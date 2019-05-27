import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, Image } from 'react-native';

const data = [
    { key: require('../../assets/food.jpg'), name:'Food' },
    { key: require('../../assets/pha.jpg'), name:'Medical' },
    { key: require('../../assets/cloth.jpg'), name:'Shopping' }
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
        <React.Fragment >
            <Image style={styles.item} source={item.key}/>
            {/* <Text>{item.name}</Text> */}
        </React.Fragment>
    );
  };

  render() {
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
    // color: '#fff',
    height: Dimensions.get('window').width / numColumns - (6*3) , // approximate a square
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