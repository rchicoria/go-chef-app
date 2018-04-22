import React, { Component } from 'react'
import { View } from 'react-native'

import NavBarButton from '@gochef/go-chef-design-system/lib/atoms/NavBarButton'
import RecipeStep from '@gochef/go-chef-design-system/lib/templates/RecipeStep'

import { getTabIcon } from '@gochef/go-chef-design-system/lib/utils/tabIcons'


export default class extends Component {
    static navigationOptions = {
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ focused }) => {
            return getTabIcon("Favs", focused)
        },
        title: "Recipe",
        headerLeft: <NavBarButton iconName="Back" />,
        headerRight: <NavBarButton iconName="Camera" />
    }

    render(){
        return <RecipeStep instructions={this.props.navigation.state.params.instructions} />
    }
}
