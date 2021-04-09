import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Animated, Button, StyleSheet, Text, View } from 'react-native';

//APP como function
export default function App() {

  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Text>Você clicou { count } vezes </Text>
      <Button 
        title="Clique aqui!"
        onPress={() => {
            setCount(count + 1)
          }
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
