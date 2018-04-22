import React from 'react';
import { View } from 'react-native';

import { StackNavigator } from 'react-navigation';

import defaultStyles from '@gochef/go-chef-design-system/lib/styles'

import RecipeDetailContainer from '../containers/RecipeDetailContainer'
import RecipeProcessContainer from '../containers/RecipeProcessContainer'


export default StackNavigator({
    RecipeSpecs: { screen: RecipeDetailContainer },
    RecipeProcess: { screen: RecipeProcessContainer },
}, {
    navigationOptions: {
        tabBarVisible: false
    },
    headerMode: 'none'
});
