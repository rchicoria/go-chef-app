import React from 'react';
import { View } from 'react-native';

import { StackNavigator } from 'react-navigation';

import defaultStyles from '@gochef/go-chef-design-system/lib/styles'

import RecipeDetailNavigator from '../navigators/RecipeDetailNavigator'
import RecipesList from '../containers/RecipesList'
import LoadRecipe from '../containers/LoadRecipe'


export default StackNavigator({
    RecipesView: { screen: RecipesList },
    LoadRecipe: { screen: LoadRecipe },
    RecipeDetail: { screen: RecipeDetailNavigator,},
}, {
    navigationOptions: {
        headerStyle: defaultStyles.navBar
    },
    mode: 'modal'
});
