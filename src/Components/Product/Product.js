import React, { Component } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ScrollView,StyleSheet, View, ImageBackground, Image, Text, Button, Icon, Left, Body, Right } from 'react-native';

export default class Product extends Component {
  render() {
    return (
      <ScrollView>
        <ImageBackground style={{ width: wp('100%'), height: hp('100%') , backgroundColor: "#fafafa"}}>
          <View style={styles.container} >
            <Image
            style={{
              width: hp('60%'),
              height: wp('80%'),
              marginTop: hp('2%')
            }}source={{uri:this.props.productData.image}}
          />
          </View>
        </ImageBackground>
      </ScrollView>
//       <Container>
//         <Header style={{backgroundColor:'rgba(16,148,246,0.7)'}} />
//         <Content Image={'../../assets/background.jpg'}>
//           <Card>
//             <CardItem>
//               <Left>
//                 <Body>
//                   <Text style={{fontWeight: 'bold',fontSize: 20 }} >{this.props.productData.name}</Text>
//                   <Text style={{color: 'red'}} note>{this.props.productData.price}</Text>
//                 </Body>
//               </Left>
//             </CardItem>
//             <CardItem cardBody>
//             {console.log("image in prod", this.props.productData.image)}
//               <Image source={{uri:this.props.productData.image}} style={{height: hp('30%'), width:wp('80%') , flex: 1}}/>
//             </CardItem>
//             {/* <CardItem>
//               <Body>
//                 <Text>
//                 {this.props.productData.description}
//                 </Text>
//               </Body>
//             </CardItem> */}
//           </Card>
// {/* 
//           <Button rounded success  block  large onPress={() => {
//                 Navigation.push(this.props.componentId, {
//                   component: {
//                     name: 'Cart'
//                   },
//                   passProps: {
//                     name: 'Cart',
//                   },
//                   options: {
//                     topBar: {
//                       title: {
//                         text: 'Cart'
//                       }
//                     }
//                   }
//                 });
//               }} >
//           <Text>Add To Cart</Text>
//           </Button> */}
//         </Content>
//       </Container>
//        <View styles={styles.btnContainer}>
//        <Button styles={{marginTop: 20,}} title='HEllo' onPress={() => {
//            Navigation.push(this.props.componentId, {
//              component: {
//                name: 'Registration'
//              },
//              passProps: {
//                name: 'Registration'
//              },
//              options: {
//                topBar: {
//                  title: {
//                    text: 'Registration'
//                  }
//                }
//              }
//            })
//          }}/>
//      </View>
    );
  }
}
// const styles = StyleSheet.create({
//   container:{
//     marginTop:hp('8%'),
//     justifyContent: 'center',
//     alignItems:'center',
//   },
// })

const styles = StyleSheet.create({
  container:{
    // marginTop:hp('8%'),
    justifyContent: 'center',
    alignItems:'center',
  },})