import React from 'react'
import {StyleSheet} from 'react-native'
import MenuContainer from './MenuContainer'


export const ListScreeen=({navigation})=><MenuContainer navigation={navigation} name='List' />
export const ReportScreeen=({navigation})=><MenuContainer navigation={navigation} name='Report' />
export const ProfileScreeen=({navigation})=><MenuContainer navigation={navigation} name='Profile' />
export const StatisticScreeen=({navigation})=><MenuContainer navigation={navigation} name='Statistic' />
export const ActivityScreeen=({navigation})=><MenuContainer navigation={navigation} name='Activity' />
export const SignOutScreeen=({navigation})=><MenuContainer navigation={navigation} name='SignOut' />
export const MessageScreeen=({navigation})=><MenuContainer navigation={navigation} name='Message' /> 

