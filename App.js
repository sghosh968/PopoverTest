/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';
import Popover from 'react-native-popover-view';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopoverVisible: false
    };
  }

  togglePopoverVisibility = () => {
    const { isPopoverVisible } = this.state;
    this.setState({
      isPopoverVisible: !isPopoverVisible
    });
  };

  render() {
    const { isPopoverVisible } = this.state;
    console.log('this.state', this.state);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Popover isVisible={isPopoverVisible} debug={true}>
          <Text>
            If you are coming from a web background, the easiest way to get
            started with React Native is with Expo tools because they allow you
            to start a project without installing and configuring Xcode or
            Android Studio. Expo CLI sets up a development environment on your
            local machine and you can be writing a React Native app within
            minutes. For instant development, you can use Snack to try React
            Native out directly in your web browser.
          </Text>
          <Button
            onPress={this.togglePopoverVisibility}
            title="Show/Hide popover"
          />
        </Popover>
        <TouchableOpacity
          style={styles.button}
          onLongPress={this.togglePopoverVisibility}
          onPress={this.togglePopoverVisibility}
        >
          <Text> Show/Hide popover </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
