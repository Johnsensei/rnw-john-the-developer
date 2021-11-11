import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import JohnsenseiAnimated from './img/johnsensei-animated.gif';
import HiraganaBreaker from './img/hiragana-breaker.png';
import FEMobile from './img/4e-mobile.png';
import AppleStore from './img/apple-store.png';
import GooglePlayStore from './img/google-play-store.png';
import PandemicMe from './img/pandemic-me.png';
import KaijuKountdown from './img/kaiju-kountdown.png';

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
        <Text style={[styles.sectionTitle]}>Mobile Games</Text>
        <View
          // style={styles.mobileGamesStyle}
          style={styles.contentContainer}
        >
          <View>
            <Image
              source={FEMobile}
              style={styles.mobileGameImage}
              alt="Fourth Energy logo"
            />
            <View style={styles.appStores}>
              {/* Apple App Store */}
              <TouchableOpacity
                onPress={() => Linking.openURL('https://apps.apple.com/us/app/fourth-energy/id1590704459')}
              >
                <Image
                  source={AppleStore}
                  style={styles.appStoreIcon}
                  // style={styles.mobileGameImage}
                  alt="Apple App Store logo"
                />
              </TouchableOpacity>
              {/* Google Play Store */}
              <TouchableOpacity
                onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.johnsensei.fourthenergy')}
              >
                <Image
                  source={GooglePlayStore}
                  style={styles.appStoreIcon}
                  // style={styles.mobileGameImage}
                  alt="Google Play Store logo"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Image
              source={HiraganaBreaker}
              style={styles.mobileGameImage}
              alt="Hiragana Breaker logo"
            />
            <View style={styles.appStores}>
              {/* Apple App Store */}
              <TouchableOpacity
                onPress={() => Linking.openURL('https://apps.apple.com/us/app/hiragana-breaker/id1207140118?ls=1')}
              >
                <Image
                  source={AppleStore}
                  style={styles.appStoreIcon}
                  // style={styles.mobileGameImage}
                  alt="Apple App Store logo"
                />
              </TouchableOpacity>
              {/* Google Play Store */}
              <TouchableOpacity
                onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.johnsenseigames.hiraganabreakerFREE')}
              >
                <Image
                  source={GooglePlayStore}
                  style={styles.appStoreIcon}
                  // style={styles.mobileGameImage}
                  alt="Google Play Store logo"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {/* WEB GAMES */}
      <View style={[styles.mobileGamesStyle, {backgroundColor: '#C6FFFF'}]}>
        <Text style={[styles.sectionTitle]}>Web Games</Text>
        <View
          // style={styles.mobileGamesStyle}
          style={styles.contentContainer}
        >
          <View>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://johnsensei.itch.io/fourth-energy')}
            >
              <Image
                source={FEMobile}
                style={styles.mobileGameImage}
                alt="Fourth Energy logo"
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://johnsensei.itch.io/pandemic-me')}
            >
              <Image
                source={PandemicMe}
                style={styles.mobileGameImage}
                alt="Pandemic Me logo"
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://johnsensei.itch.io/kaiju-kountdown')}
            >
              <Image
                source={KaijuKountdown}
                style={styles.mobileGameImage}
                alt="Kaiju Kountdown logo"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
    justifyContent: 'space-evenly',
    textAlign: 'center',
    alignItems: 'center',
    // alignContent: 'space-around',
    width: '100%',
  },
  mobileGameImage: {
    width: '365px',
    height: '250px',
    marginTop: 10,
    borderColor: '#000',
    borderWidth: 1
    // resizeMode: 'scale'
  },
  appStores: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    // textAlign: 'center',
    alignItems: 'center',
  },
  appStoreIcon: {
    width: '160px',
    height: '47px',
    margin: 10,
    
  }
});
