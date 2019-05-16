/**
 * OneAmerica Sentiment App
 * Glenn Antoine 05/2019
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { YellowBox } from "react-native";
import Emoji from 'react-native-emoji';

type Props = {};

export default class App extends Component<Props> {
  
  // Adding header title, color and font weight
  static navigationOptions = {
    title: "Home",
    headerStyle: {
      backgroundColor: "#03A9F4"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };


  render() {
    return (
      <View style={styles.container}>
        <Text>Morning Coffee & React Native: </Text><Emoji name="coffee" style={{fontSize: 60}} />
        <Emoji name="smiley" style={styles.icon} />
        <Emoji name="neutral_face" style={styles.icon} />
        <Emoji name="frowning" style={styles.icon} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 90,
    marginBottom: 15,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
