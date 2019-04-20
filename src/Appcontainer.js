import React from "react";
import {createAppContainer } from "react-navigation";



const AppContainer = createAppContainer(ProfileNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }

  
}