import React from 'react'
import {View,StatusBar,Text,ScrollView,ImageBackground,Image,StyleSheet,TouchableOpacity} from 'react-native'
import {DrawerNavigatorItems} from 'react-navigation-drawer'
import {Ionicons,Feather} from '@expo/vector-icons'

function SideBar(props,{navigation}){
    return(
        <ScrollView>
            
            <ImageBackground source={require('../../assets/Background.jpg')} style={style.ImageBackground}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image source={require('../../assets/ji.jpg')} style={style.ImageProfile}/>
                <View>
                <Text style={style.Text}>Jordao Nhanga de Oliveira</Text>
                <Text style={{fontSize:15,color:'#fff'}}>@JordaoNhanga15</Text>
                </View>
                </View>
                <View style={style.ViewIconCont}>
                    <View style={style.ViewIcon}>
                    <Text style={style.texticon}><Text style={{fontWeight:'bold',fontSize:15,padding:10}}>200</Text>Seguidores</Text>
                    <Ionicons name='md-people' size={18} color='rgba(255,255,255,.8)'/>
                    </View>  
                    <View style={style.ViewIcon}>
                    <Text style={style.texticon}><Text style={{fontWeight:'bold',fontSize:16}}>80</Text>seguindo</Text>
                    <Ionicons name='md-people' size={18} color='rgba(255,255,255,.8)'/>
                    </View>
                </View>
            </ImageBackground> 
            <View style={style.container}>
            <DrawerNavigatorItems {...props} />
            </View>
            <View style={style.LogOut}>
               <TouchableOpacity style={{backgroundColor:'tomato',alignSelf:'stretch',alignItems:'center',padding:6,borderRadius:10,marginHorizontal:12,flexDirection:'row',justifyContent:'center',fontSize:20}} onPress={(navigation)=>{console.log(navigation)}} >
                   
                    <Text style={{paddingHorizontal:9}}>LogOut</Text>
                    <Ionicons name="md-exit" size={20} color='white'></Ionicons>
               </TouchableOpacity> 
            </View>
           
        </ScrollView>
    )
}
const style=StyleSheet.create({
    container:{
        flex:1
    },
    ImageBackground:{
        position:'relative',
        width:undefined,
        padding:0,
        paddingTop:48,
        alignItems:'center',
        justifyContent:'flex-start',
        flexDirection:'column'
    },
    ImageProfile:{
        width:55,
        height:55,
        borderRadius:40,
        borderWidth:3,
        borderColor:'#FFF'
    },
    Text:{
        color:'#fff',
        fontSize:17,
        fontWeight:'800',
        marginVertical:0
    },
    texticon:{
        color:'#FFF',
        fontSize:16,
        padding:3
    },
    ViewIcon:{
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        marginVertical:5
    },
    ViewIconCont:{
        flexDirection:'row',
        alignSelf:'stretch',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    LogOut:{
        flex:5,
        justifyContent:'flex-end',
        alignItems:'center',
        alignSelf:'stretch',
        height:222,
        paddingVertical:10
    }
})
export default SideBar