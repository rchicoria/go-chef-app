import React, { Component } from 'react'
import { View } from 'react-native'

import { parseRecipe } from '../services'

export default class extends Component {
    async _parseRecipe(recipeUri){
        let data = await parseRecipe(recipeUri)
        this.props.navigation.navigate('RecipeDetail')
    }

    render() {
        this._parseRecipe(this.props.navigation.state.params.recipeUri)
        return <View />
    }
}