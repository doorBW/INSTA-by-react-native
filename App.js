import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// react-natvigation 라이브러리 에서 StackNavigator 추가하기
import { StackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your!</Text>
      </View>
    );
  }
}

// StackNavigator 를 App에 추가하기
const AppStackNavigator = StackNavigator({
  Main:{
    screen: MainScreen
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
