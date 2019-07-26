import { Navigation } from 'react-native-navigation'
export const goToAuth = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'Auth',
      children: [
        {
          component: {
            name: 'SignIn',
          }
        }
    ],
  }}});

  export const goNewHome = () => Navigation.setRoot({
    root: {
      bottomTabs : {
        visible: false,
        children: [
          {
            stack: {
              children: [{
                  component: {
                      name: "Main",
                      passProps: {
                          text: "Tab1"
                      },
                      options: {
                        
                        bottomTab: {
                            text: "Main Page",
                            icon: require("../assets/home.png"),
                            testID: "TAB_1",
                            backgroundColor:'red'
                        }
                    }
                  } 
              }]
            }
          },
          {
            stack: {
              children: [{
                  component: {
                      name: "Cart",
                      passProps: {
                          text: "Cart"
                      },
                      options: {
                        bottomTab: {
                            text: "Cart",
                            icon: require("../assets/cart.png"),
                            testID: "Cart"
                        }
                    }
                  } 
              }]
            }
          },
          {
            stack: {
              children: [{
                  component: {
                      name: "SignIn",
                      passProps: {
                          text: "Sing In"
                      },
                      options: {
                        bottomTab: {
                            text: "Sign In",
                            icon: require("../assets/signin.png"),
                            testID: "Sign In"
                        }
                    }
                  } 
              }]
            }
          },
          {
            stack: {
              children: [{
                  component: {
                      name: "Settings",
                      passProps: {
                          text: "Setting"
                      },
                      options: {
                        bottomTab: {
                            text: "Settings",
                            icon: require("../assets/gears.png"),
                            testID: "Setting"
                        }
                    }
                  } 
              }]
            }
          },
        ],
      }
    }
  });
export const goHome = () => Navigation.setRoot({
  root: {
    stack:{
      id: 'Home',
      children: [
        {
          component: {
            name: 'Home',
          }
        }

      ]
    }
  }

});