import React from "react";
import { View, Text, Button, Alert,Image } from "react-native";
import {createAppContainer ,createBottomTabNavigator, DrawerActions, TabBarBottom, createStackNavigator, TabNavigator} from "react-navigation";
import { TextInput } from "react-native-gesture-handler";
import Drawers from './src/Drawer';


class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./src/img/Profile_Pic.jpg')}
        style={{ width: 30, height: 30, marginRight:10,justifyContent:'flex-end'}}
      />
    );
  }
}


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Ahmed Shabbir',
    headerRight: <LogoTitle/>
  };



  render() {
    return (
      <Drawers/>
      
  
     
    );
  }
}


const MainScreenNavigator = createStackNavigator({
  Recent: { screen: HomeScreen },
  All: { screen: HomeScreen },
});

const SimpleApp = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: HomeScreen },
});


const ResumeNavigator = createStackNavigator({
  Home: HomeScreen
},
  {
    defaultNavigationOptions: {
      title: 'Home',
      //headerTitle: <LogoTitle />, 
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000',
      },
    },
    navigationOptions: {
      tabBarLabel: 'Hossame',
    },
  }
);

export default createAppContainer(ResumeNavigator);  