import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ pressHandler, bgColor, title }) => {
  return (
    <TouchableOpacity
      onPress={pressHandler}
      style={[{ backgroundColor: bgColor }, styles.btn]}
    >
      <Text style={styles.btnText}>{title} </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    borderRadius: 5,
  },
  btnText: {
    fontSize: 18,
    textAlign: 'center',
  },
});
