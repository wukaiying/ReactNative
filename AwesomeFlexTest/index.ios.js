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

export default class AwesomeFlexTest extends Component {
  render() {
    return (
      <View style={[styles.container,styles.flex]}>
      //整个cell view
        <View style={styles.item}>

        <View style={[styles.flex,styles.center]}>
          <Text>
              酒店
          </Text>
        </View>

        <View style={[styles.flex,styles.lineLeftRight]}>
          <View style={[styles.flex,styles.center,styles.lineCenter]}>
            <Text>
               啊肯定放假了卡机
            </Text>
          </View>
          <View style={[styles.flex,styles.center]}>
            <Text>
            adsfadsf
            </Text>
          </View>
        </View>

        <View style={styles.flex}>
          <View style={[styles.flex,styles.center,styles.lineCenter]}>
            <Text>
            asdf
            </Text>
          </View>
          <View style={[styles.flex,styles.center]}>
            <Text>
            adsfadsf
            </Text>
          </View>
        </View>

        </View>//cell view 结束

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    backgroundColor: "white"
  },
  flex: {
    flex: 1
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  //整个cell
  item: {
    flexDirection: "row",
    backgroundColor: "#FF607C",
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    height: 200,
    borderRadius: 5
  },

  //给中间 view添加border
  lineLeftRight: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "white"
  },
  lineCenter: {
    borderBottomWidth: 1,
    borderColor: "white"
  }
});

AppRegistry.registerComponent('AwesomeFlexTest', () => AwesomeFlexTest);
