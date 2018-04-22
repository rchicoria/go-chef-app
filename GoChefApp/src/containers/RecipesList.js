import React, { Component } from 'react'
import { View, Button } from 'react-native'

import NavBarButton from '@gochef/go-chef-design-system/lib/atoms/NavBarButton'
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

    render() {
        return (
            <View>
                <Button onPress={() => this.props.navigation.navigate('RecipeDetail')} title={"Go to recipe"} />
            </View>
        )
    }
}