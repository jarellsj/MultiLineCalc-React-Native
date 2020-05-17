import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import * as colors from './colors';
import {NumButton, OrangeButton, ControlButton} from './components/Buttons';

class Calculator extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonRowContainer}>
            <ControlButton label="<" />
            <ControlButton label="> " />
            <ControlButton label="Del" />
            <ControlButton label="Clear" />
          </View>
          <View style={styles.buttonRowContainer}>
            <NumButton label="^" />
            <NumButton label="√ " />
            <NumButton label="π" />
            <NumButton label="/" />
          </View>
          <View style={styles.buttonRowContainer}>
            <NumButton label="7" />
            <NumButton label="8" />
            <NumButton label="9" />
            <NumButton label="x" />
          </View>
          <View style={styles.buttonRowContainer}>
            <NumButton label="4" />
            <NumButton label="5" />
            <NumButton label="6" />
            <NumButton label="-" />
          </View>
          <View style={styles.buttonRowContainer}>
            <NumButton label="1" />
            <NumButton label="2" />
            <NumButton label="3" />
            <NumButton label="+" />
          </View>
          <View style={styles.buttonRowContainer}>
            <NumButton label="0" />
            <NumButton label="." />
            <NumButton label="(" />
            <OrangeButton label="=" />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Calculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginLeft: 20,
    marginRight: 20,
  },
  buttonRowContainer: {
    flexDirection: 'row',
  },
});
