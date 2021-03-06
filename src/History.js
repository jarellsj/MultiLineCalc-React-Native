import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {GREY_TEXT} from './colors';

class History extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          ref={ref => {
            this.scrollView = ref;
          }}
          onContentSizeChange={() =>
            this.scrollView.scrollToEnd({animated: true})
          }>
          {this.props.history.map((item, i) => (
            <View key={(item, i)}>
              <TouchableOpacity onPress={() => this.props.action(item.answer)}>
                <Text style={styles.answer}>{item.answer}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.action(item.expression)}>
                <Text style={styles.expression}>{item.expression}</Text>
              </TouchableOpacity>
            </View>
          ))}
          <Text style={styles.output}>{this.props.output}</Text>
        </ScrollView>
      </View>
    );
  }
}

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'flex-end',
    marginBottom: 5,
  },
  answer: {
    textAlign: 'right',
    fontSize: 24,
  },
  expression: {
    textAlign: 'left',
    fontSize: 20,
    marginBottom: 4,
    color: GREY_TEXT,
  },
  output: {
    marginTop: 5,
    textAlign: 'left',
    fontSize: 24,
  },
});
