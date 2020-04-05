import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@material-ui/core';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Planted</Text>
      {/* <Button title="Log In" onPress={() => {}}>Log In</Button> */}
      <Button><Text></Text></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: "30%"
  },

  title: {
    fontSize: 32
  }
});
