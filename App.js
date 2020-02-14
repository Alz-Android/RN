import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {LoginScreen} from './screens/LoginScreen.js'
import {RegisterScreen} from './screens/RegisterScreen.js'
import {SelectGenresScreen} from './screens/SelectGenresScreen.js'
import {SelectNovelScreen} from './screens/SelectNovelScreen.js'
import {ViewNovelScreen} from './screens/ViewNovelScreen.js'

const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
    SelectGenres: SelectGenresScreen,
    SelectNovel: SelectNovelScreen,
    ViewNovel: ViewNovelScreen
  },
  {
    headerMode: 'none',
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

