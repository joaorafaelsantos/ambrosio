import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import NotificationService from './NotificationService';
import messaging from '@react-native-firebase/messaging';

function App() {
  const notification = useRef(new NotificationService());

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
