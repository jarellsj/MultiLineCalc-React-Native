import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View, ScrollView, Text} from 'react-native';
import * as colors from './colors';
import {evaluate} from 'mathjs';
import {
  NumButton,
  OrangeButton,
  ControlButton,
  LightBlueButton,
  ControlButtonIcon,
} from './components/Buttons';
import History from './History';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      output: '',
      history: [],
      parenthCount: 0,
    };
  }

  handlePress = value => {
    this.setState(prevState => ({
      output: this.state.output + value,
    }));
  };

  onClear = () => {
    this.setState({
      output: '',
      parenthCount: 0,
    });
  };

  handleEval = expression => {
    const newHistory = this.state.history.concat({
      expression: this.state.output,
      answer: evaluate(expression),
    });
    this.setState({
      history: newHistory,
      output: '',
    });
  };

  handleError = expression => {
    const newHistory = this.state.history.concat({
      expression: this.state.output,
      answer: 'Error invalid expression',
    });
    this.setState({
      history: newHistory,
      output: '',
    });
  };

  handleEqualPress = () => {
    const tempExpression = this.state.output.replace(/√/g, 'sqrt');
    const expression = tempExpression.replace(/π/g, '(pi)');
    const checkNum = /\d/g;
    const checkPi = /pi/g;
    const endOp = /[/*^+-]$/g;
    const emptySqrt = /['sqrt()']/g;
    const checkDot = /^['.pi']/;
    console.log('output:' + this.state.output);
    console.log('output:' + expression);
    checkPi.test(expression) && !checkDot.test(expression)
      ? this.handleEval(expression)
      : endOp.test(expression) ||
        (emptySqrt.test(expression) && !checkNum.test(expression)) ||
        (checkDot.test(expression) && !checkNum.test(expression))
      ? this.handleError(expression)
      : this.handleEval(expression);
  };

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <History history={this.state.history} output={this.state.output} />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonRowContainer}>
              <ControlButtonIcon
                iconName="ios-backspace"
                onPress={() => this.handleTap('clear')}
              />
              <ControlButton label="Clear" onPress={this.onClear} />
            </View>
            <View style={styles.buttonRowContainer}>
              <LightBlueButton
                label="^"
                onPress={() => this.handlePress('^')}
              />
              <LightBlueButton
                label="√"
                onPress={() => {
                  this.handlePress('√(');
                  this.state.parenthCount++;
                }}
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
              <NumButton
                label="("
                onPress={() => {
                  this.handlePress('(');
                  this.state.parenthCount++;
                  console.log('Parentheseis:' + this.state.parenthCount);
                }}
              />
              {this.state.parenthCount > 0 ? (
                <OrangeButton
                  label=")"
                  onPress={() => {
                    this.handlePress(')');
                    this.state.parenthCount--;
                  }}
                />
              ) : (
                <OrangeButton label="=" onPress={this.handleEqualPress} />
              )}
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
});
