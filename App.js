import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, Button, TextInput, Form } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { RFPercentage } from "react-native-responsive-fontsize";
import * as Font from 'expo-font';

import JohnsenseiAnimated from './img/johnsensei-animated.gif';
import HiraganaBreaker from './img/hiragana-breaker.png';
import FEMobile from './img/4E-mobile.png';
import AppleStore from './img/apple-store.png';
import GooglePlayStore from './img/google-play-store.png';
import PandemicMe from './img/pandemic-me.png';
import KaijuKountdown from './img/kaiju-kountdown.png';
import NucampBootstrap from './img/nucamp-bootstrap.png';
import NucampReact from './img/nucamp-react.png';
import NucampReactNative from './img/nucamp-react-native.png';
import NucampBackend from './img/nucamp-backend.png';
import { min } from 'react-native-reanimated';

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(
    async () => {
      await Font.loadAsync({
        // Load a font `Montserrat` from a static resource
        'Retro-Italics': require('./fonts/retroitalics.ttf'),
        'Retro-Chips': require('./fonts/Retrochips.otf'),
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
        <Text style={styles.headerText}>Gale </Text>
        {/* <Text style={styles.headerText}>Developer </Text> */}
        <Image
          source={JohnsenseiAnimated}
          style={styles.johnsenseiAnimated}
        />
      </View>
      {/* HEADER SUBTITLE */}
      <View style={styles.subtitleStyle}>
        <Text style={styles.subtitleText}>Development Portfolio</Text>
        {/* <Text style={styles.subtitleText}>John Gale</Text> */}
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
              {/* TODO: Update app store logos for FE to say iPads and tablets only */}
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
      {/* TODO: Make into a carousel with all featured games. */}
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
      {/* BOOTCAMP PROJECTS */}
      <View style={[styles.mobileGamesStyle, {backgroundColor: '#A9FFFF'}]}>
        <Text style={[styles.sectionTitle]}>Bootcamp Projects</Text>
        <View
          // style={styles.mobileGamesStyle}
          style={styles.contentContainer}
        >
          {/* BOOTSTRAP PROJECT */}
          <View style={{marginTop: 40, marginRight: min(10)}}>
            <Text style={styles.descriptionText}>NuCamp Bootstrap Project</Text>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://nucamp-bootstrap-project.s3.us-east-2.amazonaws.com/jlr-prototype/index.html')}
            >
              <Image
                source={NucampBootstrap}
                style={[styles.mobileGameImage, {width: 323, height: 202}]}
                alt="Nucamp Bootstrap Project"
              />
            </TouchableOpacity>
            <Text style={styles.descriptionText}>Hosted on AWS S3</Text>
            <Text style={[styles.descriptionText, {textDecorationLine: 'underline', alignSelf: 'center'}]}
              onPress={() => Linking.openURL('https://github.com/Johnsensei/jlr-prototype')}
            >GitHub repo</Text>
          </View>
          {/* REACT PROJECT */}
          <View style={{marginTop: 40}}>
            <Text style={styles.descriptionText}>NuCamp React Project</Text>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://master.d27sy7609npbeb.amplifyapp.com/home')}
            >
              <Image
                source={NucampReact}
                style={[styles.mobileGameImage, {width: 319, height: 202}]}
                alt="Nucamp React Project"
              />
            </TouchableOpacity>
            <Text style={styles.descriptionText}>Hosted on AWS Amplify</Text>
            <Text style={[styles.descriptionText, {textDecorationLine: 'underline', alignSelf: 'center'}]}
              onPress={() => Linking.openURL('https://github.com/Johnsensei/jlr-react')}
            >GitHub repo</Text>
          </View>
          {/* REACT NATIVE PROJECT */}
          <View style={{marginTop: 40}}>
            <Text style={styles.descriptionText}>NuCamp React Native Project</Text>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://github.com/Johnsensei/jlr-reactnative')}
              style={{alignSelf: 'center'}}
            >
              <Image
                source={NucampReactNative}
                style={[styles.mobileGameImage, {borderWidth: 0, width: 257, height: 235}]}
                alt="Nucamp React Project"
              />
            </TouchableOpacity>
            <Text style={[styles.descriptionText, {textDecorationLine: 'underline', alignSelf: 'center'}]}
              onPress={() => Linking.openURL('https://github.com/Johnsensei/jlr-reactnative')}
            >GitHub repo</Text>
          </View>
          {/* BACKEND PROJECT */}
          <View style={{marginTop: 40}}>
            <Text style={styles.descriptionText}>NuCamp Backend Project</Text>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://github.com/Johnsensei/jlrServer')}
            >
              <Image
                source={NucampBackend}
                style={[styles.mobileGameImage, {height: 202}]}
                alt="Nucamp React Project"
              />
            </TouchableOpacity>
            <Text style={[styles.descriptionText, {textDecorationLine: 'underline', alignSelf: 'center'}]}
              onPress={() => Linking.openURL('https://github.com/Johnsensei/jlrServer')}
            >GitHub repo</Text>
          </View>
        </View>
      </View>
      {/* CONTACT FORM */}
      {/* TODO: Make Contact form and string it up with AWS to send email. */}
      {/* <View style={[styles.mobileGamesStyle, {backgroundColor: '#8CEEED'}]}>
        <Text style={[styles.sectionTitle]}>Contact</Text>
        <View>

        </View>

      </View> */}

      {/* FOOTER */}
      <View style={styles.headerStyle}>
        <Text style={{color: '#fff', fontSize: RFPercentage(1.5)}}>Connect - Contact</Text>
        <View style={[styles.contentContainer, {justifyContent: 'center', padding: 10}]}>
        <SocialIcon
            type='github'
            onPress={() => Linking.openURL('https://github.com/Johnsensei')}
          />
          <SocialIcon
            type='linkedin'
            onPress={() => Linking.openURL('https://www.linkedin.com/in/johnagale/')}
          />
          <SocialIcon
            type='twitter'
            onPress={() => Linking.openURL('https://twitter.com/MrJohnSensei')}
          />
        </View>
        <Text style={{color: '#000', fontSize: RFPercentage(1.5)}}>This site was coded with React Native Web and is hosted on AWS Amplify. </Text>
        <View style={[styles.contentContainer, {margin: 10}]}>
          <Text style={{color: '#000', fontSize: RFPercentage(1.5), textDecorationLine: 'underline', alignSelf: 'center'}}
            onPress={() => Linking.openURL('https://github.com/Johnsensei/rnw-john-the-developer')}
          >GitHub repo</Text>
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#008080',
    width: '100%',
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
    width: '100%',
  },
  mobileGameImage: {
    width: '365px',
    height: '250px',
    marginTop: 10,
    borderColor: '#000',
    borderWidth: 1
  },
  appStores: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  appStoreIcon: {
    width: '160px',
    height: '47px',
    margin: 10,
  },
  descriptionText: {
    fontFamily: 'Concert-One',
    fontSize: RFPercentage(2),
    color: '#008080'
  },
  formRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    margin: 10
},
  formLabel: {
    fontSize: 18,
    flex: 2
},
  formItem: {
    flex: 1
},
});

// Other TODOS:
// Move each section into its own separate component.
// Get a preview with image and description working for social media sites.