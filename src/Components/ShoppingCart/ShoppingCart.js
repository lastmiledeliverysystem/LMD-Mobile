import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Button,
  Image,
  Dimensions,
  FlatList,
  ScrollView,
  Alert
} from 'react-native';
import stripe from 'tipsi-stripe';
import { goNewHome } from '../../Screens/navigation';
import { Navigation } from 'react-native-navigation';
import openMap from 'react-native-open-maps';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

stripe.setOptions({
  publishableKey: 'pk_test_moQf2agBX9vIiwTZ9EEkt4B1002nfWrMTi',
});

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

    
  requestPayment = () => {
    return stripe
      .paymentRequestWithCardForm()
      .then(stripeTokenInfo => {
        // console0.warn('Token created', { stripeTokenInfo });
        Alert.alert(
          'Success',
          'Do you want to track the Robot',
          [
            {
              text: 'Cancel',
              onPress:()=>goNewHome(
                
              ),
              style: 'cancel',
            },
            {text: 'OK', onPress: () =>openMap({ latitude: 37.865101, longitude: -119.538330 })
            }],
          {cancelable: false},
        );
      })
      .catch(error => {
        console.warn('Payment failed', { error });
      });
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
    
    return (
      <View>
      <FlatList
        data={this.state.products}
        extraData={this.state}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Image
              source={require('../../assets/shoes.jpg')}
              style={styles.productImageStyle}
          />
          <View>
            <Text>{item.productName}</Text>
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
            
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn} onPress={() => this.removeHandler(item.id)}>
              <Text style={{color:'#fff',fontWeight:"bold"}}>Remove</Text>
            </TouchableOpacity>
        </View>
        </View>
        )}
      />
      <View style={styles.checkoutContainer}>
          <View style={styles.totalPriceStyle}>
            <Text style={{ fontWeight: '900', fontSize: 19 }}>
              Total Price: ${this.state.totalPrice}
            </Text>
          </View>
          <View style={styles.buttonStyle}>
            <Button
              onPress={this.requestPayment}
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
    display:'flex',
    flexDirection:'row',
    backgroundColor: '#f0f1f7',
    justifyContent:'space-around',
    alignContent:'center',
    alignItems:'center',
    marginTop:10  
  },

  btnContainer:{
    justifyContent: 'center',
    // borderRadius: 30,
    // borderBottomWidth: 1,
    // width: wp('1%'),
    // padding: 12,
    // borderColor:'rgba(138, 183, 222, 0.25)'  
  },
  
  btn: {    
    // width: wp('1%'),
    alignItems: 'center',
    // backgroundColor: 'rgba(16,148,246,0.7)',
    backgroundColor: '#DF423A',
    padding: 10,
    color:'#fff',
    // marginTop:hp('2%'),
    // borderRadius:50
  },

  productsContainer: {
    // backgroundColor: '#ff0'
    width:wp('100%'),
  },
  productCard: {
    padding: 15,
    paddingRight: 5,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    display:'flex',
  },
  productImageHolderStyle: {
    marginRight: 20
  },
  productImageStyle: {
    width: width/3,
    height: height/6,
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
    justifyContent: 'center',
    marginTop:80    // backgroundColor: '#f0f'
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
