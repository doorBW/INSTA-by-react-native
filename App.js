import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// react-natvigation 라이브러리 에서 StackNavigator 추가하기
import { createStackNavigator } from 'react-navigation';
// MainScreen 추가
import MainScreen from './Components/MainScreen';

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

// StackNavigator 를 App에 추가하기
const AppStackNavigator = createStackNavigator({
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
