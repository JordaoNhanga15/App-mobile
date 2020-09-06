import React from 'react'
import {View,Text,SafeAreaView,StyleSheet} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { Feather } from '@expo/vector-icons'
//import {Profile,Notifications,Settings} from '../../components/Menu'
import Profile from '../../components/Menu/Profile'
import Notifications from '../../components/Menu/Notifications'
import Settings from '../../components/Menu/Settings'
import MenuCont from './MenuContainer'
import Routes from '../Routes'
  const Prof=()=> <Profile name='profile'/> 
 let coloors={
   icon:'white',
   ic:'black'
 }
const BottomNavigator=createBottomTabNavigator({
        Routes:{
          screen:Routes,
          navigationOptions:{
            tabBarLabel:'M',
            tabBarIcon:({tintColor})=>(
              <Feather name="home" size={20} color={tintColor}/>
            )
          },
        }
        ,Notifications:{
          screen:Notifications,
          navigationOptions:{
            tabBarIcon:({tintColor})=>
            <Feather name="message-circle" size={20} color={tintColor}/>
          }
        }
        ,Settings:{
          screen:Settings,
          navigationOptions:{
            tabBarIcon:({tintColor})=>
            <Feather name="bell" size={20} color={tintColor}/>
          }
        },
        Prof:{
          screen:Prof,
          navigationOptions:{
            tabBarIcon:({tintColor})=>
            <Feather name="user" size={20} color={tintColor}/>
          }
        }
      },
      {
       tabBarOptions:{
         activeBackgroundColor:'#1e293a',
         activeTintColor:'white',
         inactiveTintColor:'black',
         inactiveBackgroundColor:'#ccc',
         tabStyle:{
           flex:1
         },
         labelStyle:{
          alignSelf:'center',
          alignItems:'center'
          ,justifyContent:'flex-start'
         },
         showLabel:false,
         showIcon:true
       }
      }
// }
// ,
//  {
//          contentComponent:props=><Routes {...props}/>
//  }
)


createAppContainer(BottomNavigator)

const style=StyleSheet.create({

})

export default createAppContainer(BottomNavigator)