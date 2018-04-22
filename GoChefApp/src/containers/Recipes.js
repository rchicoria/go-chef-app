import React, { Component } from 'react'
import { View } from 'react-native'

import NavBarButton from '@gochef/go-chef-design-system/lib/atoms/NavBarButton'
import Ingredients from '@gochef/go-chef-design-system/lib/templates/Ingredients'
import { getTabIcon } from '@gochef/go-chef-design-system/lib/utils/tabIcons'


export default class extends Component {
    static navigationOptions = {
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ focused }) => {
            return getTabIcon("Favs", focused)
        },
        title: "Ingredients",
        headerLeft: <NavBarButton iconName="Back" />,
        headerRight: <NavBarButton iconName="Camera" />
    }

    render(){
        let ingredients = [
          {name: "CENAS", value: "100g"},
          {name: "CENAS", value: "100g"},
          {name: "CENAS", value: "100g"},
          {name: "CENAS", value: "100g"},
          {name: "CENAS", value: "100g"},
        ]

        return <Ingredients ingredients={ ingredients } />
    }
}
