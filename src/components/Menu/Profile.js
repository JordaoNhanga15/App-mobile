import React from 'react'
import{View,StyleSheet,TouchableOpacity,SafeAreaView,Text}from 'react-native'
import {FontAwesome5} from '@expo/vector-icons'
import {DrawerActions} from 'react-navigation-drawer'
//import { toggleDrawer } from 'react-navigation-drawer/lib/typescript/src/routers/DrawerActions';
import {createDrawerNavigator} from 'react-navigation-drawer'

function Profile(props){
    return(
        <View style={style.container}>
            
            <View style={{flex:1,justifyContent:'flex-start',margin:0,alignSelf:"stretch",alignItems:'center',justifyContent:'center'}}>
        <Text style={style.Text}> your {props.name}</Text>
            </View>
            </View> 
    )
}

const style=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        backgroundColor:'#1e293a'
    },
    Text:{
        color:'white',
        fontSize:22
    }
})

export default Profile