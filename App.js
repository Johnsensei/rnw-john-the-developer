import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import JohnsenseiAnimated from './img/johnsensei-animated.gif';

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
      <View style={styles.headerStyle}>
        <Text style={styles.headerText}>John </Text>
        <Text style={styles.headerText}>the </Text>
        <Text style={styles.headerText}>Developer </Text>
        <Image
          source={JohnsenseiAnimated}
          style={styles.johnsenseiAnimated}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    
    alignItems: 'center',
    justifyContent: 'top',
  },
  headerText: {
    color: '#fff',
    fontSize: RFPercentage(4),
    fontFamily: 'Retro-Italics',
    
  },
  johnsenseiAnimated: {
    width: '48px',
    height: '48px'
  },
  headerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    
  }
});
