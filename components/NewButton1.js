import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function NewButton1({ text, onPress }) {
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
    width: '75%',
    position: 'relative',
    marginLeft: '1%',
    borderRadius: 8,
    paddingVertical: 14,
    marginTop: 20,
    
    //marginLeft: 0,
    backgroundColor: '#d9d9d9',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
});
