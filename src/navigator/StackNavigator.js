import TableScreen from '../screens/TableScreen';
import OrderFoodScreen from '../screens/OrderFoodScreen';

import BottomNavigator from '../navigator/BottomTabNavigator';
import {createStackNavigator} from 'react-navigation-stack';
const StackNavigator = createStackNavigator(
  {
    //Can use name in here but i like label :)
    TableScreen: {
      screen: TableScreen,
      navigationOptions: {
        title: 'Bàn',
      },
    },

    OrderFood: {
      screen: BottomNavigator,
      navigationOptions: {
        title: 'Thông tin bàn',
      },
    },
  },
  {
    initialRouteName: 'TableScreen',
  },
);

export default StackNavigator;
