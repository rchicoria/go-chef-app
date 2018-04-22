import React from 'react';
import { View } from 'react-native';

import { StackNavigator } from 'react-navigation';

import defaultStyles from '@gochef/go-chef-design-system/lib/styles'

import Recipes from '../containers/Recipes'
import RecipesList from '../containers/RecipesList'

export default StackNavigator({
    RecipesView: { screen: RecipesList },
    RecipeDetail: { screen: Recipes },
}, {
    navigationOptions: {
        headerStyle: defaultStyles.navBar
    },
    mode: 'modal'
});
