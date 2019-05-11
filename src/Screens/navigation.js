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
        children: [
          {
            stack: {
              children: [{
                  component: {
                      name: "Vendors",
                      passProps: {
                          text: "Tab1"
                      },
                      options: {
                        bottomTab: {
                            text: "Shop",
                            icon: require("./icon.png"),
                            testID: "TAB_1"
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
                          text: "Tab1"
                      },
                      options: {
                        bottomTab: {
                            text: "Cart",
                            icon: require("../assets/cart.png"),
                            testID: "TAB_1"
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
                          text: "Tab1"
                      },
                      options: {
                        bottomTab: {
                            text: "Tab1",
                            icon: require("../assets/signin.png"),
                            testID: "TAB_1"
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
                          text: "Tab1"
                      },
                      options: {
                        bottomTab: {
                            text: "Settings",
                            icon: require("../assets/gears.png"),
                            testID: "TAB_1"
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