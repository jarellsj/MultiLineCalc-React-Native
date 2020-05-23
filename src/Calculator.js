import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View, ScrollView, Text} from 'react-native';
import * as colors from './colors';
import {
  NumButton,
  OrangeButton,
  ControlButton,
  LightBlueButton,
} from './components/Buttons';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      output: '',
      answer: '',
    };
  }

  handlePress = value => {
    this.setState({
      output: this.state.output + value,
    });
  };

  evaluate = () => {
    this.setState({
      // eslint-disable-next-line no-eval
      answer: eval(this.state.output),
      output: '',
    });
  };

  onClear = () => {
    this.setState({
      output: '',
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <ScrollView style="historyContainer">
            <Text>{this.state.answer}</Text>
          </ScrollView>

          <Text style={styles.value}>{this.state.output}</Text>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonRowContainer}>
              <ControlButton iconName="ios-arrow-round-back" />
              <ControlButton iconName="ios-arrow-round-forward" />
              <ControlButton
                iconName="ios-backspace"
                onPress={() => this.handleTap('clear')}
              />
              <ControlButton iconName="ios-backspace" onPress={this.onClear} />
            </View>
            <View style={styles.buttonRowContainer}>
              <LightBlueButton
                label="^"
                onPress={() => this.handlePress('^')}
              />
              <LightBlueButton
                label="√"
                onPress={() => this.handlePress('√(')}
              />
              <LightBlueButton
                label="π"
                onPress={() => this.handlePress('π')}
              />
              <LightBlueButton
                label="/"
                onPress={() => this.handlePress('/')}
              />
            </View>
            <View style={styles.buttonRowContainer}>
              <NumButton label="7" onPress={() => this.handlePress('7')} />
              <NumButton label="8" onPress={() => this.handlePress('8')} />
              <NumButton label="9" onPress={() => this.handlePress('9')} />
              <LightBlueButton
                label="x"
                onPress={() => this.handlePress('*')}
              />
            </View>
            <View style={styles.buttonRowContainer}>
              <NumButton label="4" onPress={() => this.handlePress('4')} />
              <NumButton label="5" onPress={() => this.handlePress('5')} />
              <NumButton label="6" onPress={() => this.handlePress('6')} />
              <LightBlueButton
                label="-"
                onPress={() => this.handlePress('-')}
              />
            </View>
            <View style={styles.buttonRowContainer}>
              <NumButton label="1" onPress={() => this.handlePress('1')} />
              <NumButton label="2" onPress={() => this.handlePress('2')} />
              <NumButton label="3" onPress={() => this.handlePress('3')} />
              <LightBlueButton
                label="+"
                onPress={() => this.handlePress('+')}
              />
            </View>
            <View style={styles.buttonRowContainer}>
              <NumButton label="0" onPress={() => this.handlePress('1')} />
              <NumButton label="." onPress={() => this.handlePress('.')} />
              <NumButton label="(" />
              <OrangeButton label="=" onPress={this.evaluate} />
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
  historyContainer: {
    flex: 1,
  },
  value: {
    fontSize: 28,
  },
});
