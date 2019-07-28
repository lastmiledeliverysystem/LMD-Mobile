import React, { Component } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ScrollView,StyleSheet, View, ImageBackground, Image,TouchableOpacity,Text } from 'react-native';
import { Navigation } from 'react-native-navigation';


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
          <View style={styles.details}>
            <Text style={styles.name} >{this.props.productData.name}</Text>
            <Text style={{...styles.name,color: 'rgba(255,0,0,1)' }} >{this.props.productData.price} LE</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.desc} >{this.props.productData.description}</Text>
          </View>
          <View style={{marginLeft:hp('3%')}}>
            <Text style={styles.name} >Size</Text>
            <Text style={styles.desc} >H:70cm W:50cm D:40cm </Text>
          </View>
          <View style={{marginLeft:hp('3%')}}>
            <Text style={styles.name} >Options</Text>
            <Text style={styles.desc} >H:70cm W:50cm D:40cm </Text>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn} onPress={() => {
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
              <Text style={{color:'#fff',fontWeight:"bold"}}>Add To Cart </Text>
            </TouchableOpacity>
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
    // margin:hp('10%'),
    justifyContent: 'center',
    alignItems:'center',
  },
  details:{
    flexDirection:'row',
    justifyContent: 'space-between',
    color: 'rgba(16,148,246,0.7)',
    fontSize: 20,
    padding:0,
    marginTop:hp('3%'),
    marginLeft:hp('3%'),
    marginRight:hp('3%'),
    // textAlign:'left',
    fontWeight: 'bold',
  },
  name:{
    color: 'rgba(16,148,246,0.7)',
    fontSize: 20,
    fontWeight: 'bold',
  },
  
  desc:{
    // color: 'rgba(16,148,246,0.7)',
    fontSize: 15,
    marginBottom:hp('3%'),

    // fontWeight: 'bold',
  },
  btnContainer:{
    justifyContent: 'center',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: wp('100%'),
    padding: 12,
    borderColor:'rgba(138, 183, 222, 0.25)'  },

  btn: {    
    alignItems: 'center',
    backgroundColor: 'rgba(16,148,246,0.7)',
    padding: 10,
    color:'#fff',
    // marginTop:hp('2%'),
    borderRadius:50
  },



})