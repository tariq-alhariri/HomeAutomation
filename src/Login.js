import React from 'react';
import { StyleSheet, View ,Text , Image , KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends React.Component {
  render() {
    return (
    <KeyboardAvoidingView behavior="padding" style={styles.container }>
     <View style={styles.container}>
     	<View style={styles.logoContainer} >
     		<Image 
     		style={styles.logo}
     		source={require('./Smart.png')}
     		 /> 
     	</View>
     	<Text style={styles.header}> Welcome to the Home Automation System</Text>
     	  
      <View style={styles.formContainer}>
      		<LoginForm />
     	</View>
     		</View> 
     		</KeyboardAvoidingView>
    );  
  }
}	
	  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEFA',
    alignItems: 'center',
    justifyContent: 'center'
  },
  formContainer : {

  },
  logoContainer :{
  	alignItems :'center',
  	flexGrow :1,
  	justifyContent: 'center'

  },

  logo: {
  	width: 200,
  	height :200 
  },
  header : {
  	color: '#fff',
  	marginTop:5,	 
  	textAlign : 'center',
  	opacity : 0.8,
  	fontWeight: '700'
  	
  }
});