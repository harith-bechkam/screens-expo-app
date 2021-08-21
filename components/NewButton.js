import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function NewButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    // top: 120,
    margin: 5,
    marginLeft: '13%',
    marginRight: '13%',
     position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',

    // paddingLeft: '5%',
    
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 75,
    alignSelf:'flex-end',
    backgroundColor: '#f01d71',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
    // paddingHorizontal: 75,
  },
});
