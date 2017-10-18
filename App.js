
import React from 'react';
import { StyleSheet, Text, View, Component, AppRegistry, TouchableHighlight, Button, Image,ontouchend, button, Navigator } from 'react-native';
// import ImageButton from "react-native-img-button";
// const login = import('./views/login.js');
import Login from './src/Login';
import Login from './src/Signup';

export default class App extends React.Component {
  log(){
    console.log("Hello World!")
  };
  render() {
    return (
    <Login />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  largeText:{
  	fontSize: 40,
  	fontWeight: 'bold',
  	fontStyle: 'italic',
  	paddingLeft: 20,
  	paddingRight: 20
  }
});
