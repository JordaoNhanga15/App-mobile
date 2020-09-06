import React from 'react'
import{View,StyleSheet,TouchableOpacity,SafeAreaView,Text}from 'react-native'
import {FontAwesome5} from '@expo/vector-icons'
import {DrawerActions} from 'react-navigation-drawer'
import {createDrawerNavigator} from 'react-navigation-drawer'

function Settings(props){

    return(
        <View style={style.container}>
            
            <View style={{flex:1,justifyContent:'flex-start',margin:0,alignSelf:"stretch",alignItems:'center',justifyContent:'center'}}>
        <Text style={style.Text}>choices {props.name} </Text>
            </View>
            </View> 
    )
}

const style=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center"
    },
    Text:{
        color:'#161924',
        fontSize:20
    }
})

export default Settings