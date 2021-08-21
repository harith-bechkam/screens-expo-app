import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import screen1 from '../components/screen1';
import screen2 from '../components/screen2';
import screen3 from '../components/screen3';
import screen4 from '../components/screen4';
import screen5 from '../components/screen5';

const screens = {
  
  screen1: {
    screen: screen1,
    navigationOptions: {
      title: '',
      headerStyle: { height: 0 },
    },
  },
  screen2: {
    screen: screen2,
    navigationOptions: {
      title: '',
    },
  },
  screen3: {
    screen: screen3,
    navigationOptions: {
      title: '',
    },
  },
  screen4: {
    screen: screen4,
    navigationOptions: {
      title: '',
    },
  },
  screen5: {
    screen: screen5,
    navigationOptions: {
      title: '',
    },
  },
  
};

const HomeStack = createStackNavigator(
  screens
  //  ,{
  //   defaultNavigationOptions:{
  //     headerStyle:{backgroundColor:'green',height:0}
  //   }
  // }
);

export default createAppContainer(HomeStack);
