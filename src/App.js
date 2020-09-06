import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
//import { StatusBar } from 'expo-status-bar';
import Routes from './screens/Routes'
import MenuContainer from './screens/Menu/MenuContainer'
import ScreenMenu from './screens/Menu/Screen'

function App(props){
  return(
    <ScreenMenu {...props}/>
  )
}



export default App;