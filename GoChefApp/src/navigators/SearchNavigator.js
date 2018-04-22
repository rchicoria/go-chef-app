import React from 'react';
import { View } from 'react-native';

import { StackNavigator } from 'react-navigation';

import defaultStyles from '@gochef/go-chef-design-system/lib/styles'

import Search from '../containers/Search'

export default StackNavigator({
    SearchView: { screen: Search },
}, {
    navigationOptions: {
        headerStyle: defaultStyles.navBar
    },
    mode: 'modal'
});
