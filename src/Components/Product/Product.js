import { Navigation } from 'react-native-navigation';
import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class CardImageExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content Image={'../../assets/background.jpg'}>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text style={{fontWeight: 'bold',fontSize: 20 }} >{this.props.productData.name}</Text>
                  <Text style={{color: 'red'}} note>{this.props.productData.price}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
            {console.log("image in prod", this.props.productData.image)}
              <Image source={{uri:this.props.productData.image}} style={{height: 300, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                {this.props.productData.description}
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Button rounded  success  block  large onPress={() => {
                Navigation.push(this.props.componentId, {
                  component: {
                    name: 'Cart'
                  },
                  passProps: {
                    name: 'Cart',
                  },
                  options: {
                    topBar: {
                      title: {
                        text: 'Cart'
                      }
                    }
                  }
                });
              }} >
          <Text>Add To Cart</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}