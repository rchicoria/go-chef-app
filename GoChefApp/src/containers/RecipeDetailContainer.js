import React, { Component } from 'react'
import { View } from 'react-native'

import NavBarButton from '@gochef/go-chef-design-system/lib/atoms/NavBarButton'
import RecipeDetail from '@gochef/go-chef-design-system/lib/templates/RecipeDetail'
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
        if(!this.props.navigation.state.params){
            this.props.navigation.state.params = {}
        }
        let name = this.props.navigation.state.params.name || "TEST RECIPE"; 
        let ingredients = this.props.navigation.state.params.ingredients || [ "ING 1", "ING 2" ]; 
        let duration = this.props.navigation.state.params.duration || "20 min"
        let instructions = this.props.navigation.state.params.instructions || [ "ING 1", "ING 2","ING 1", "ING 2","ING 1", "ING 2" ]
        return <RecipeDetail onPressAction={() => {this.props.navigation.navigate("RecipeProcess", {instructions: instructions})}} duration={duration} name={name} ingredients={ingredients} />
    }
}
