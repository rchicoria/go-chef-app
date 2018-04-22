import React from 'react';
import { View } from 'react-native';

import { StackNavigator } from 'react-navigation';

import defaultStyles from '@gochef/go-chef-design-system/lib/styles'

import Home from '../containers/Home'

export default StackNavigator({
    Popular: { screen: Home },
    Photo: { screen: View}
}, {
    navigationOptions: {
        headerStyle: defaultStyles.navBar
    },
    mode: 'modal'
});
