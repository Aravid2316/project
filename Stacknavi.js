import * as React from 'react';
import { Button, View, Text, Backgroundcolor, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginscreen from '../Loginscreen';
import Drawerscreen from '../Navifolder/Drawernavi';
import Tabscreen from '../Navifolder/Tabnavi';
import Youtube from './Youtube';
import Webview from './Webview';
import styless from '../Screens/Globalstyle';

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, }}>
      <ImageBackground source={require('../assets/image1.jpeg')} style={styless.stack} >
        <Text style={styless.navigationtext}>DRAWER NAVIGATION DEMO</Text>
        <Button
          title="CLICK"
          color="#ffff"
          onPress={() => navigation.push('Drawer')}
        />
        <Text style={styless.navigationtext}>TAB NAVIGATION DEMO</Text>
        <Button
          title="CLICK"
          color="#ffff"
          onPress={() => navigation.push('Tab')}
        />
        <Text style={styless.navigationtext}>YOUTUBE</Text>
        <Button
          title="CLICK"
          color="#ffff"
          onPress={() => navigation.push('YT')}
        />
        <Text style={styless.navigationtext}>WEBVIEW</Text>
        <Button
          title="CLICK"
          color="#ffff"
          onPress={() => navigation.push('web')}
        />
      </ImageBackground>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Loginscreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Drawer" component={Drawerscreen} options={{ headerShown: false }} />
        <Stack.Screen name="Tab" component={Tabscreen} options={{ headerShown: false }} />
        <Stack.Screen name="YT" component={Youtube} options={{ headerShown: false }} />
        <Stack.Screen name="web" component={Webview} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;