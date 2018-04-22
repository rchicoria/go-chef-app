import React from 'react';
import { View } from 'react-native';

import { StackNavigator } from 'react-navigation';

import defaultStyles from '@gochef/go-chef-design-system/lib/styles'

import Recipes from '../containers/Recipes'

export default StackNavigator({
    RecipeSpecs: { screen: Recipes },
}, {
    navigationOptions: {
        tabBarVisible: false
    },
    headerMode: 'none'
});
