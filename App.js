
import React from 'react';
import {  Button, View, Text } from 'react-native';
import Stacknavi from './Navifolder/Stacknavi';
import Drawernavi from './Navifolder/Drawernavi';
import Login from './Loginscreen';
import Screen1 from './Screens/Screen1';
import Postmann from './Postman';
import Sqll from './sql';
import Sql from './Sql123';

const YourApp = () => {
  return (
   // <Postmann/>
//<Login/>
//<Drawernavi/>
  <Stacknavi/>
  //<Sql/>
    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //   <Text>
    //     Try editing me! 🎉
    //   </Text>
    // </View>
  );
}

export default YourApp;
