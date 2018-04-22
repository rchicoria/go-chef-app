/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TabNavigator } from 'react-navigation';

import colors from '@gochef/go-chef-design-system/lib/colors'
import styles from '@gochef/go-chef-design-system/lib/styles'

import HomeNavigator from './src/navigators/HomeNavigator'
import ProfileNavigator from './src/navigators/ProfileNavigator'
import RecipesNavigator from './src/navigators/RecipesNavigator'
import Search from './src/containers/Search'

export default TabNavigator({
  Home: { screen: HomeNavigator },
  Recipes: { screen: RecipesNavigator },
  Explore: { screen: Search },
  Profile: { screen: ProfileNavigator },
}, {
  tabBarOptions: {
    showLabel: false,
    // activeTintColor: colors.green,
    // inactiveTintColor: colors.grey,
    style: styles.tabBar
  }
});