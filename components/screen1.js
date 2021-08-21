import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import FlatButton from '../components/FlatButton';
// You can import from local files
// import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';

export default function screen1({ navigation }) {
  const HandleChange = () => {
    navigation.navigate('screen2');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/mainpageimage.png')}
      />

      <Text style={styles.text1}>Demo App</Text>
      <Text style={styles.text2}>Get in Shape</Text>
      <Text style={styles.text3}>
        The fastest (and more sustainable) way to lose weight and fit healthy
      </Text>
      <FlatButton text="Get Started" onPress={HandleChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    // padding: 8,
  },
  logo: {
    height: '80%',
    width: '100%',
    marginTop: -150,
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 24,
  },
  text1: {
    top: 10,
    fontSize: 30,
    textAlign: 'center',
    color: 'grey',
    padding: 10,
  },
  text2: {
    paddingBottom: 10,
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
  },
  text3: {
    paddingBottom: 30,
    textAlign: 'center',
    color: 'grey',
  },
});
