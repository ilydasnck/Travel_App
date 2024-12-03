import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Title = props => {
  return (
    <View>
      <Text style={styles.text}>Title {props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'yellow',
    textAlign: 'center',
    padding: 10,
  },
});

export default Title;
