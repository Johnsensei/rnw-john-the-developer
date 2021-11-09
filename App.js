import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(
    async () => {
      await Font.loadAsync({
        // Load a font `Montserrat` from a static resource
        'Retro-Italics': require('./fonts/retroitalics.ttf'),
      });
      setFontsLoaded(true);
    }
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 40,
    fontFamily: 'Retro-Italics'
  }
});
