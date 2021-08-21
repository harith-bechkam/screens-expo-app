import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import Constants from 'expo-constants';
import Navigator from './routes/HomeStack';
import * as Font from 'expo-font';
import screen1 from './components/screen1';
import { AppLoading } from 'expo';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const fetchFont = () =>
  Font.loadAsync({
    'mousemordeno': require('./assets/fonts/MuseoModerno-ExtraLight.ttf'),
  });
export default function App({ navigation }) {
  // const [change, setChange] = useState(true);
  const [fontLoaded, setfontLoaded] = useState(true);

  
  if (fontLoaded) {
    return( <Navigator />);
  } else {
    return (
      // <AppLoading startAsync={fetchFont} onFinish={() => setfontLoaded(true)} />
      null
    );
  }
  // if (change) {

  // } else return null;
}
