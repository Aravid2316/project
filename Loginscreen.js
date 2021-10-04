
import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import styless from './Screens/Globalstyle';
const YourApp = ({ navigation }) => {
  const [email, setEmail] = useState('Test123@gmail.com');
  const [pass, setPassword] = useState('Test@123');
  const setmail = (text) => {
    setEmail(text);
  }
  const setpass = (text) => {
    setPassword(text);
  }
  const pressingaction = () => {
    if (!email) {
      alert("enter email")
    }
    else if (!pass) {
      alert("enter password")
    }
    else if (pass.length < 6) {
      alert(" password mustbe morethan 6 characters")
    }
    else if (email != "Test123@gmail.com" || pass != "Test@123") {
      alert("Invalid details")
    }
    else {
      alert("signin successfully")
      navigation.navigate("Details");
    }
  }
  return ( 
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('./assets/image1.jpeg')}  style={styless.stack}>
      <Text style={styless.identifier}>USER ID</Text>
      <TextInput style={styless.textbox} placeholder="Enter your e-mail"
        onChangeText={text => { setmail(text) }}>{email}</TextInput>
      <Text style={styless.identifier}>PASSWORD</Text>
      <TextInput style={styless.textbox} placeholder="Enter your password"
        onChangeText={text => { setpass(text) }}>{pass}</TextInput>
      <Text style={styless.signup}>signup?</Text>
      <TouchableOpacity onPress={pressingaction} >
        <Text style={styless.signin}>signin</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
export default YourApp;