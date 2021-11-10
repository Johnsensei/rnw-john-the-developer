import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import JohnsenseiAnimated from './img/johnsensei-animated.gif';
import HiraganaBreaker from './img/hiragana-breaker.png';
import FEMobile from './img/4e-mobile.png';

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(
    async () => {
      await Font.loadAsync({
        // Load a font `Montserrat` from a static resource
        'Retro-Italics': require('./fonts/retroitalics.ttf'),
        'Retro-Chips': require('./fonts/Retrochips.otf'),
        'Cotton-Butter': require('./fonts/CottonButter.ttf'),
        'Johnie-Horian': require('./fonts/JohnieHorian.ttf'),
        'Concert-One': require('./fonts/ConcertOne.ttf'),
      });
      setFontsLoaded(true);
    }
  );

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerStyle}>
        <Text style={styles.headerText}>John </Text>
        <Text style={styles.headerText}>the </Text>
        <Text style={styles.headerText}>Developer </Text>
        <Image
          source={JohnsenseiAnimated}
          style={styles.johnsenseiAnimated}
        />
      </View>
      {/* HEADER SUBTITLE */}
      <View style={styles.subtitleStyle}>
        <Text style={styles.subtitleText}>The development portfolio of John Gale</Text>
      </View>
      {/* MOBILE GAMES */}
      <View style={styles.mobileGamesStyle}>
        <Text style={styles.sectionTitle}>Mobile Games</Text>
        <View
          // style={styles.mobileGamesStyle} 
          style={styles.contentContainer}
        >
          <Image
            source={FEMobile}
            style={styles.mobileGameImage}
            alt="Hiragana Breaker logo"
          />
          <Image
            source={HiraganaBreaker}
            style={styles.mobileGameImage}
            alt="Hiragana Breaker logo"
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'top',
  },
  headerStyle: {
    // flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#008080',
    width: '100%',
    // height: '25%',
    padding: 20
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
  subtitleStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#008080',
    width: '100%',
    padding: 1,
    paddingBottom: 19
  },
  subtitleText: {
    color: '#000',
    fontSize: RFPercentage(2),
    fontFamily: 'Retro-Chips',
  },
  mobileGamesStyle: {
    backgroundColor: '#E4FFFF',
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontFamily: 'Concert-One',
    fontSize: RFPercentage(3),
    color: '#008080'
  },
  contentContainer: {
    
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    width: '100%',
  },
  mobileGameImage: {
    width: '365px',
    height: '250px',
    margin: 10,
    // resizeMode: 'scale'
  }
});
