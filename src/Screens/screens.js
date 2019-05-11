import {Navigation} from 'react-native-navigation';
import Home from './Home/Home';
import Initializing from './Initializing/Initializing';
import SignIn from './SignIn/SignIn';
import Cart from './Cart/Cart';
import Registration from './Registration/Registration';
import Products from './Products/Products';
import Product from './Product/Product';
import Vendors from './Vendors/Vendors';
import Settings from './Settings/Settings';
export function registerScreens(){
    Navigation.registerComponent('Home', () => Home);
    Navigation.registerComponent('Initializing', () => Initializing);
    Navigation.registerComponent('SignIn', () => SignIn);
    Navigation.registerComponent('Cart', () => Cart);
    Navigation.registerComponent('Registration', () => Registration);
    Navigation.registerComponent('Products', () => Products);
    Navigation.registerComponent('Product', () => Product);
    Navigation.registerComponent('Vendors', () => Vendors);
    Navigation.registerComponent('Settings', () => Settings);
}