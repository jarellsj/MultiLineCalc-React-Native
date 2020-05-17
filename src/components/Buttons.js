import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import * as colors from '../colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const NumButton = props => (
  <TouchableOpacity style={styles.numButton}>
    <Text style={styles.text}>{props.label}</Text>
  </TouchableOpacity>
);

export const OrangeButton = props => (
  <TouchableOpacity style={styles.orangeButton}>
    <Text style={styles.text}>{props.label}</Text>
  </TouchableOpacity>
);

export const LightBlueButton = props => (
  <TouchableOpacity style={styles.lightBlueButton}>
    <Text style={styles.text}>{props.label}</Text>
  </TouchableOpacity>
);

export const ControlButton = props => (
  <TouchableOpacity style={styles.controlButton}>
    <Ionicons name={props.iconName} color={colors.WHITE} size={36} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  numButton: {
    backgroundColor: colors.BLUE,
    flex: 1,
    margin: 5,
    borderRadius: 25,
    paddingTop: 12,
    paddingBottom: 12,
  },
  text: {
    fontSize: 32,
    textAlign: 'center',
    color: colors.WHITE,
  },
  orangeButton: {
    backgroundColor: colors.ORANGE,
    flex: 1,
    margin: 5,
    borderRadius: 10,
    paddingTop: 12,
    paddingBottom: 12,
  },
  lightBlueButton: {
    backgroundColor: colors.LIGHT_BLUE,
    flex: 1,
    margin: 5,
    borderRadius: 25,
    paddingTop: 12,
    paddingBottom: 12,
  },
  controlButton: {
    backgroundColor: colors.GREY,
    flex: 1,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 15,
    paddingTop: 4,
    paddingBottom: 4,
    alignItems: 'center',
  },
});
