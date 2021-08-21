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

export default function screen4({ navigation }) {
  const HandleChange1 = () => {
    navigation.navigate('screen5')
  };

  return (
    <ImageBackground source={require('../assets/kayleigh-harrington-yhn4okt6ci0-unsplash.png')} style={styles.body} blurRadius={2}>
      <Text style={styles.title}>What's your activity level ?</Text>
      <View style={styles.rt}>
        <NewButton text="No preference" onPress={HandleChange1} />
        <NewButton text="Vegetarain" onPress={HandleChange1} />
        <NewButton text="Vegan" onPress={HandleChange1} />
        <NewButton text="Ket(low carb" onPress={HandleChange1} />
        <NewButton text="Other" onPress={HandleChange1} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  body: {
    flex:1,
    height: '110%',
    width: '100%',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    resizeMode: 'cover',
    filter: 'blur(8)',
  
  },
  title: {
    fontSize: 25,
    position: 'relative',
    top: -20,
    color: 'white',
  },
  rt: {
    // position: 'relative',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    marginLeft: 80,
    
  },
});
