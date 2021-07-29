import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import messaging from '@react-native-firebase/messaging';

function App() {
  useEffect(() => {
    messaging().subscribeToTopic('users');
  }, []);

  return (
    <View>
      <Text>Ambrosio</Text>
    </View>
  );
}

export default App;
