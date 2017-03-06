/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

//组件
export default class AwesomeViewTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.topView, styles.border]}></View>
        <View style={[styles.bottomView, styles.border,{borderWidth: 5}]}></View>
      </View>
    );
  }
}

//组件样式
const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginLeft: 30,
    backgroundColor: 'red',
    width: 300,
    height: 400
  },
  topView: {
    backgroundColor: "green",
    width: 280,
    height: 250,
    margin: 10
  },
  bottomView: {
    backgroundColor: "yellow",
    width: 280,
    height: 150,
    margin: 10
  },
  border: {
    borderWidth: 3,
    borderColor: "black"
  },
});

//注册
AppRegistry.registerComponent('AwesomeViewTest', () => AwesomeViewTest);
