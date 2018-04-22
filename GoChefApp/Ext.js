import { View,	Navigator,	StyleSheet,	TouchableOpacity,	Image,	Dimensions,	BackAndroid,	Platform,	ToastAndroid,	Text,	Alert, Linking, Button } from 'react-native'
import React, { Component } from 'react'

import ShareExtension from 'react-native-share-extension';

export default class Index extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
	render(){
		return(
            <View style={{ flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: "100%",
                    height: "100%",
                    backgroundColor:'rgba(0,0,0, 0.3)'}}>
			    <View style={{ height:200, width:'90%', backgroundColor:'deeppink' }} >
                    <Button onPress={async () => {
                        const { type, value } = await ShareExtension.data()
                        ShareExtension.openURL("gochefapp://recipe?url="+value).catch(err => Alert.alert("ERRO"));
                    }} title="Cenas"/>
                </View>
            </View>
		)
	}
}