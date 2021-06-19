import React from "react";
import { FunctionComponent } from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet, } from "react-native";
import { StatusBar as StatusBarExpo } from 'expo-status-bar';

export const SafeAreaViewCustom: FunctionComponent = ({children, ...rest}) => {
  return(
    <SafeAreaView style={style.safeAreaView} {...rest} >
      <StatusBarExpo style="light"  backgroundColor="#794BC4" />
       { children }
    </SafeAreaView>
  )
}



const style = StyleSheet.create({
  safeAreaView: {
    flex: 1, 
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#794BC4',
  },
})