import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import * as colors from '../colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const NumButton = ({label, onPress}) => (
  <TouchableOpacity style={styles.numButton} onPress={onPress}>
    <Text style={styles.text}>{label}</Text>
  </TouchableOpacity>
);

export const OrangeButton = ({label, onPress}) => (
  <TouchableOpacity style={styles.orangeButton} onPress={onPress}>
    <Text style={styles.text}>{label}</Text>
  </TouchableOpacity>
);

export const LightBlueButton = ({label, onPress}) => (
  <TouchableOpacity style={styles.lightBlueButton} onPress={onPress}>
    <Text style={styles.text}>{label}</Text>
  </TouchableOpacity>
);

export const ControlButton = ({label, onPress}) => (
  <TouchableOpacity style={styles.controlButton} onPress={onPress}>
    <Text style={styles.controlButtonText}>{label}</Text>
  </TouchableOpacity>
);

export const ControlButtonIcon = ({iconName, onPress}) => (
  <TouchableOpacity style={styles.controlButton}>
    <Ionicons
      name={iconName}
      onPress={onPress}
      color={colors.WHITE}
      size={28}
      style={styles.controlButtonIcon}
    />
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
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlButtonText: {
    fontSize: 22,
    textAlign: 'center',
    color: colors.WHITE,
  },
  controlButtonIcon: {
    marginTop: 2,
  },
});
