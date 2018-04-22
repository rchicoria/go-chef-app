import React from 'react';
import { View } from 'react-native';

import { StackNavigator } from 'react-navigation';

import defaultStyles from '@gochef/go-chef-design-system/lib/styles'

import Profile from '../containers/Profile'

export default StackNavigator(
    {
      Main: { screen: Profile }
    },
    {
      navigationOptions: {
        headerStyle: defaultStyles.navBar
      },
    }
);
