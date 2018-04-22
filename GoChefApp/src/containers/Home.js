import React, { Component } from 'react'
import { View } from 'react-native'

import NavBarButton from '@gochef/go-chef-design-system/lib/atoms/NavBarButton'
import { getTabIcon } from '@gochef/go-chef-design-system/lib/utils/tabIcons'

export default class extends Component {
    static navigationOptions = {
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ focused }) => {
            return getTabIcon("Feed", focused)
        },
        title: "Feed",
        headerLeft: <NavBarButton iconName="Profile" />,
        headerRight: <NavBarButton iconName="Profile" />
    }
    render(){
        return <View />
    }
}
