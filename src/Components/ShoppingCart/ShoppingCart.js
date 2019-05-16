import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Button,
  Image,
  Dimensions,
  FlatList
} from 'react-native';

export default class ShoppingCart extends Component {
  state = {
    products: [
      { productName: 'Cool Car', price: 50, quantity: 1 },
      { productName: 'Cool Car', price: 150, quantity: 2 },
      { productName: 'Cool Car', price: 500, quantity: 3 }
    ],
    totalPrice: 1000
  };

  calcTotalPrice = () => {
    const sum = 1000;
    // Calclate Price
    this.setState({ totalPrice: sum });
  };
  checkoutHandler = () => {};
  decHandler = () => {};
  incHandler = () => {};

  render() {
    const renderProductList = (
      <FlatList
        data={this.state.products}
        renderItem={({ item }) => {
          return (
            <View style={styles.productCard}>
              <View style={styles.productImageStyle}>
                <Image
                  source={require('../../assets/car.png')}
                  style={{
                    width: 100,
                    height: 100,
                    borderColor: '#000',
                    borderWidth: 1
                  }}
                />
              </View>
              <View style={styles.productInfoStyle}>
                <Text style={{ fontWeight: '500', fontSize: 15 }}>
                  Product: {item.productName}
                </Text>
                <Text style={{ fontSize: 14, color: '#1e90ff', marginTop: 7 }}>
                  Price: ${item.price}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                  }}
                >
                  <Text style={{ fontSize: 15, marginTop: 13 }}>Qty:</Text>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={this.decHandler}
                  >
                    <Text>-</Text>
                  </TouchableOpacity>
                  <Text style={{ fontSize: 15, marginTop: 13 }}>
                    {item.quantity}
                  </Text>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={this.incHandler}
                  >
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.productControlStyle}>
                <Button
                  onPress={this.checkoutHandler}
                  title='Remove'
                  color='#DF423A'
                />
                <View />
              </View>
            </View>
          );
        }}
      />
    );

    return (
      <View style={styles.container}>
        <View style={styles.productsContainer}>{renderProductList}</View>

        <View style={styles.checkoutContainer}>
          <View style={styles.totalPriceStyle}>
            <Text style={{ fontWeight: '900', fontSize: 19 }}>
              Total Price: ${this.state.totalPrice}
            </Text>
          </View>
          <View style={styles.buttonStyle}>
            <Button
              onPress={this.checkoutHandler}
              title='CHECKOUT'
              color='#1e90ff'
            />
          </View>
        </View>
      </View>
    );
  }
}
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    height: height,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: '#f0f1f7'
  },
  productsContainer: {},
  productCard: {
    padding: 15,
    paddingRight: 5,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  productImageStyle: {
    marginRight: 20
  },
  productInfoStyle: {
    marginRight: 20
  },
  productControlStyle: {
    marginLeft: 20,
    padding: 10,
    justifyContent: 'flex-start'
  },
  checkoutContainer: {
    justifyContent: 'center'
  },
  button: {
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 13,
    borderRadius: 20,
    borderWidth: 1
  },
  buttonStyle: {
    marginBottom: height / 10,
    paddingLeft: width / 20,
    paddingRight: width / 20
  },
  totalPriceStyle: {
    borderRadius: 10,
    borderBottomWidth: 1,
    alignSelf: 'center',
    padding: 5,
    marginBottom: 10
  }
});
