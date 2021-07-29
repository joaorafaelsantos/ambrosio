import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import messaging from '@react-native-firebase/messaging';

function App() {
  useEffect(() => {
    messaging().subscribeToTopic('users');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ambrosio</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 48,
    color: '#D9BD87',
    textTransform: 'uppercase',
  },
});

export default App;
