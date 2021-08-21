import React, { useState } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import DateTimePicker from 'react-native-modal-datetime-picker';
import NewButton1 from '../components/NewButton1';

export default function screen4({ navigation }) {
  const [isVisible, setIsVisible] = useState(false);

  const handlePicker = () => {
    setIsVisible(false);
  };
  const showPicker = () => {
    setIsVisible(true);
  };
  const hidePicker = () => {
    setIsVisible(false);
  };
  const handledatepickerbtn = () => {
    navigation.navigate('screen6')
  };

  return (
    <ImageBackground
      style={styles.logo}
      source={require('../assets/mainpageimage.png')}>
      <Text style={styles.title}>What's your Gender?</Text>
      <View style={styles.rt}>
        <NewButton1 text="Continue" onPress={handledatepickerbtn} />
      </View>
      <TouchableOpacity style={styles.datepickerbtn} onPress={showPicker}>
        <Text style={styles.texting}>select Here</Text>
      </TouchableOpacity>
      <DateTimePicker
        isVisible={isVisible}
        onConfirm={handlePicker}
        onCancel={hidePicker}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  
  logo: {
    height: '80%',
    width: '100%',
  },
  title: {
    fontSize: 25,
    position: 'relative',
    top: 10,
    color: 'white',
  },

  datepickerbtn: {
    flex: 0,
    width: 250,
    height: 50,
    top:100,
    marginTop:-43,
    backgroundColor: '#330066',
    borderRadius: 30,
    justifyContent: 'center',
    marginLeft: 70,
    backgroundColor: '#f01d71',
  },
  texting: {
    fontSize: 18,
    color: 'white',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  rt:{
    position: 'relative',
    flex: 1,
    flexDirection: 'column',
   alignItems: 'stretch',
    justifyContent: 'flex-end',
   marginLeft:80,
   
  },
});
