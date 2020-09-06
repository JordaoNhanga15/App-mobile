import React from 'react'

import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {Dimensions,StyleSheet} from 'react-native'

import { Feather } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import Profile from '../components/Menu/Profile'

import {
    ListScreeen,
    ReportScreeen,
    ProfileScreeen,
    StatisticScreeen,
    ActivityScreeen,
    SignOutScreeen,
    MessageScreeen
} from './Menu/MenuIndex'

import SideBar from '../components/Menu/SideBar'

//<SignOutScreeen style={style.LogOut} />

const DrawerNavigator =createDrawerNavigator({
    ProfileScreeen:{
        screen:ProfileScreeen,
        navigationOptions:{
            title:"Profile",
            drawerIcon:({tintColor})=> <Feather name="user" size={16} color={tintColor}/>
        }
    },
    MessageScreeen:{
        screen:MessageScreeen,
        navigationOptions:{
            title:'message',
            drawerIcon:({tintColor})=><Feather name="message-square" size={16} color={tintColor}/>
        }
    },
    ListScreeen:{
        screen:ListScreeen,
        navigationOptions:{
            title:'Lists',
            drawerIcon:({tintColor})=> <Feather name="list" size={16} color={tintColor}/>
        }
    },
    StatisticScreeen:{
        screen:StatisticScreeen,
        navigationOptions:{
            title:'Statistic',
            drawerIcon:({tintColor})=><Feather name="trending-up" size={16} color={tintColor}/>
        }
    },
    ActivityScreeen:{
        screen:ActivityScreeen,
        navigationOptions:{
            title:'activities',
            drawerIcon:({tintColor})=><Feather name="activity" size={16} color={tintColor}/>
        }
    },
    
    ReportScreeen:{
        screen:ReportScreeen,
        navigationOptions:{
            title:'Report',
            drawerIcon:({tintColor})=><Feather name="bar-chart" size={16} color={tintColor}/>
        }
    },
   
},
{
    contentComponent:props=><SideBar {...props}/>,
    drawerWidth:Dimensions.get('window').width*0.88,
    hideStatusBar:true,
    contentOptions:{
        activeBackgroundColor:'#1e293a',
        activeTintColor:'rgba(224,224,224,0.9)'
    ,
    itemsContainerStyle:{
        marginTop:5,
        marginHorizontal:8
    },
    itemStyle:{
        borderRadius:4
    }
}
}
)
const style=StyleSheet.create({
    LogOut:{
        position: 'absolute',
        bottom: 0
    }
})
export default createAppContainer(DrawerNavigator) 