import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TextInput,
} from 'react-native';
import * as colors from './colors';
import {
  NumButton,
  OrangeButton,
  ControlButton,
  LightBlueButton,
} from './components/Buttons';

class Calculator extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <ScrollView>
            <Text> hi </Text>
          </ScrollView>
          <TextInput />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonRowContainer}>
              <ControlButton iconName="ios-arrow-round-back" />
              <ControlButton iconName="ios-arrow-round-forward" />
              <ControlButton iconName="ios-backspace" />
            </View>
            <View style={styles.buttonRowContainer}>
              <LightBlueButton label="^" />
              <LightBlueButton label="√ " />
              <LightBlueButton label="π" />
              <LightBlueButton label="/" />
            </View>
            <View style={styles.buttonRowContainer}>
              <NumButton label="7" />
              <NumButton label="8" />
              <NumButton label="9" />
              <LightBlueButton label="x" />
            </View>
            <View style={styles.buttonRowContainer}>
              <NumButton label="4" />
              <NumButton label="5" />
              <NumButton label="6" />
              <LightBlueButton label="-" />
            </View>
            <View style={styles.buttonRowContainer}>
              <NumButton label="1" />
              <NumButton label="2" />
              <NumButton label="3" />
              <LightBlueButton label="+" />
            </View>
            <View style={styles.buttonRowContainer}>
              <NumButton label="0" />
              <NumButton label="." />
              <NumButton label="(" />
              <OrangeButton label="=" />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Calculator;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  buttonRowContainer: {
    flexDirection: 'row',
  },
});
