import React from 'react'
import{View,StyleSheet,TouchableOpacity,SafeAreaView,Text}from 'react-native'
import {FontAwesome5} from '@expo/vector-icons'
import {DrawerActions} from 'react-navigation-drawer'
//import { toggleDrawer } from 'react-navigation-drawer/lib/typescript/src/routers/DrawerActions';
import {createDrawerNavigator} from 'react-navigation-drawer'

function MenuContainer(props,){
    //let openDrawer=navigation;

    return(
        <View style={style.container}>
            <SafeAreaView style={{flex:1,alignSelf:'stretch',alignItems:'center',justifyContent:'space-around',display:'flex'}}>
            <TouchableOpacity style={{
                flex:1,
                display:'flex',
                alignItems:"flex-end",
                marginTop:25,
                margin:15,
                alignSelf:'stretch'
            }}>
                <FontAwesome5 name="bars" size={35} color='#161924' onPress={()=>props.navigation.openDrawer()}></FontAwesome5>
            </TouchableOpacity>
            <View style={{flex:1,justifyContent:'flex-start',margin:0,alignSelf:"stretch",alignItems:'center'}}>
        <Text style={style.Text}>{props.name} Jordao</Text>
            </View>
            </SafeAreaView>
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

export default MenuContainer