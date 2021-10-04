import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity,Button,Image, Platform,Pagination } from 'react-native';
import { DatePickerIOS } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import MapView from 'react-native-maps';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ImagePicker from 'react-native-image-picker';
import Gallery from 'react-native-image-gallery';
//MODERN DATE PICKER VIEW
function HomeScreen({navigation}) {
  const [chosenDate, setChosenDate] = useState(new Date());
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <DatePickerIOS
        date={chosenDate}
        onDateChange={setChosenDate}
      />
      <Button onPress={() => navigation.goBack()} title="Go back" />
    </View>
  );
}


//IMAGE PICKER

function SettingsScreen() {
const choosefile =()=>{
  const options = {
    title: 'Load Photo',
    customButtons: [
      { name: 'button_id_1', title: 'CustomButton 1' },
      { name: 'button_id_2', title: 'CustomButton 2' }
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
      Alert.alert(response.customButton);
    } else {
      // You can also display the image using data:
      // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      setImageSource(response.uri);
    }
  });
}
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity>
          <Text onPress={choosefile}>photos</Text>
        </TouchableOpacity>
        {/* <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'}}  ></Image> */}
         <Gallery
        style={{ flex: 1, backgroundColor: '#fff' }}
        images={[
          { source: require('../assets/image1.jpeg'), dimensions: { width: 150, height: 150 } },
          { source: { uri: 'https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80' } },
          { source: { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png' } },
          { source: { uri: 'https://image.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg' } },
          { source: { uri: 'https://i.gadgets360cdn.com/large/avengers_key_art_small_1597298661028.jpg' } }
        ]}
        
      />
      {/* <Pagination
    inactiveDotColor='gray'
    dotColor={'orange'}
    activeDotIndex={indexSelected}
    dotsLength={images.length}
    animatedDuration={150}
    inactiveDotScale={1}
  /> */}
      </View>
    );
  }

//MAPVIEW

  function SetScreen() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Sett</Text>
        <MapView style={{ flex: 1 }} region={{
          latitude: 13.003387,
          longitude: 80.255043,
          // latitudeDelta: 0.0922,   
          //  longitudeDelta: 0.0421 
        }} showsUserLocation={true}
        />
      </View>
    );
  }
  const Tab = createBottomTabNavigator();
  export default function App() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="MODERN DATEPICKER" component={HomeScreen}   />
        <Tab.Screen name="WAIT" component={SettingsScreen} />
        <Tab.Screen name="MAPVIEW" component={SetScreen} />
      </Tab.Navigator>
    );
  }



