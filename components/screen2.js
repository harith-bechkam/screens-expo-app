import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Button,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import NewButton from '../components/NewButton';
// You can import from local files
// import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';

export default function screen2({ navigation }) {
  const HandleChange1 = () => {
    navigation.navigate('screen3');
  };

  return (
    <ImageBackground
      source={require('../assets/mainpageimage.png')}
      style={styles.body}>
      <Text style={styles.title}>What's your Gender?</Text>
      <View style={styles.rt}>
        <NewButton text="Female" onPress={HandleChange1} />
        <NewButton text="Male" onPress={HandleChange1} />
        <NewButton text="Non-Binary" onPress={HandleChange1} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  body: {
    height: '100%',
    width: '100%',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  title: {
    fontSize: 25,
    position: 'relative',
    top: -20,
    color: 'white',
  },
  rt: {
    position: 'relative',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    marginLeft: 80,
    // width: '100%',
  },
});
