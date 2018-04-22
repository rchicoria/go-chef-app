import React, { Component } from 'react'
import { View } from 'react-native'

import { parseRecipe } from '../services'

export default class extends Component {
    async _parseRecipe(recipeUri){
        let data = await parseRecipe(recipeUri)
        console.log(JSON.stringify(data.data))
        this.props.navigation.navigate('RecipeDetail', {
            name: data.data.name, 
            ingredients: data.data.ingredients, 
            duration: data.data.totalTime+' min',
            instructions: data.data.instructions
        })
    }

    render() {
        this._parseRecipe(this.props.navigation.state.params.recipeUri)
        return <View />
    }
}