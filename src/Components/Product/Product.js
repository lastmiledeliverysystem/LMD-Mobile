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
                  <Text style={{fontWeight: 'bold',fontSize: 20 }} >Vans Shoes</Text>
                  <Text style={{color: 'red'}} note>1000 LE</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../../assets/shoes.jpg')} style={{height: 300, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                Vans is an American manufacturer of skateboarding shoes and related apparel, based in Santa Ana, California and owned by VF Corporation. The company also sponsors surf, snowboarding, BMX, and motocross teams.[2] Since 1996, the company has been the primary sponsor of the annual Vans Warped Tour traveling rock festival.
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
                    name: 'Cart'
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