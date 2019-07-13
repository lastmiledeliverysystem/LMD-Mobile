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
      {
        id: '1',
        productName: 'Cool Car',
        price: 50,
        quantity: 1,
        stockQuantity: 10
      },
      {
        id: '2',
        productName: 'Cool Car',
        price: 150,
        quantity: 2,
        stockQuantity: 10
      },
      {
        id: '3',
        productName: 'Cool Car',
        price: 500,
        quantity: 3,
        stockQuantity: 10
      }
    ],
    totalPrice: 1000
  };
  componentDidMount() {
    // this.getDataHandler();
    this.calcTotalPrice();
  }
  getDataHandler = async () => {
    axios
      .get('http://localhost:8000/api/cart/userCart/', {
        headers: { 'x-auth-token': localStorage.getItem('token') }
      })
      .then(async res => {
        axios
          .post('http://localhost:8000/api/products/list', { ids: res.data })
          .then(res => {
            console.log(res.data);
            this.setState({ products: res.data });
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(e => {
        console.log('err', e);
      });
  };

  checkoutHandler = () => {
    //Checkout
  };

  removeHandler = id => {
    const filtered = this.state.products.filter(function(value, index, arr) {
      return value.id !== id;
    });
    this.setState({ products: filtered }, () => {
      this.calcTotalPrice();
    });
  };

  decrementHandler = id => {
    const { products } = this.state;
    const productIndex = products.findIndex(product => product.id === id);

    if (products[productIndex].quantity > 0) {
      products[productIndex].quantity -= 1;
    }
    this.setState({ products: products });
    this.calcTotalPrice();
  };

  incrementHandler = id => {
    const { products } = this.state;
    const productIndex = products.findIndex(product => product.id === id);
    if (
      products[productIndex].quantity < products[productIndex].stockQuantity
    ) {
      products[productIndex].quantity += 1;
    }
    this.setState({ products: products });
    this.calcTotalPrice();
  };

  calcTotalPrice = () => {
    let sum = 0;
    const { products } = this.state;
    for (let i = 0; i < products.length; i++) {
      sum = sum + products[i].price * products[i].quantity;
    }
    this.setState({ totalPrice: sum });
  };

  render() {
    const renderProductList = (
      <FlatList
        data={this.state.products}
        extraData={this.state}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productCard} id={item.id}>
            <View style={styles.productImageHolderStyle}>
              <Image
                source={require('../../assets/shoes.jpg')}
                style={styles.productImageStyle}
              />
            </View>
            <View style={styles.productInfoHolderStyle}>
              <Text style={{ fontWeight: '500', fontSize: 15 }}>
                {item.productName}
              </Text>
              <Text style={{ fontSize: 14, color: '#1e90ff', marginTop: 7 }}>
                Price: ${item.price}
              </Text>
              <View style={styles.qtyControlStyle}>
                <Text style={{ fontSize: 15, marginTop: 13 }}>Qty: </Text>
                <TouchableOpacity
                  style={styles.qtyButton}
                  onPress={() => this.decrementHandler(item.id)}
                >
                  <Text style={{ fontFamily: 'monospace' }}>-</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 15, marginTop: 13 }}>
                  {' ' + item.quantity + ' '}
                </Text>
                <TouchableOpacity
                  style={styles.qtyButton}
                  onPress={() => this.incrementHandler(item.id)}
                >
                  <Text style={{ fontFamily: 'monospace' }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.productRemoveHolderStyle}>
              <Button
                onPress={() => this.removeHandler(item.id)}
                title='Remove'
                color='#DF423A'
              />
              <View />
            </View>
          </View>
        )}
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
  productsContainer: {
    // backgroundColor: '#ff0'
  },
  productCard: {
    padding: 15,
    paddingRight: 5,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  productImageHolderStyle: {
    marginRight: 20
  },
  productImageStyle: {
    width: 100,
    height: 100,
    borderColor: '#000',
    borderWidth: 1
  },
  productInfoHolderStyle: {
    marginRight: 20,
    marginLeft: 4
  },
  qtyControlStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  productRemoveHolderStyle: {
    // backgroundColor: '#555',
    marginLeft: 40,
    padding: 10,
    justifyContent: 'flex-start'
  },
  qtyButton: {
    paddingLeft: 6,
    paddingRight: 6,
    marginTop: 13,
    borderRadius: 5,
    borderWidth: 2
  },
  checkoutContainer: {
    justifyContent: 'center'
    // backgroundColor: '#f0f'
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
