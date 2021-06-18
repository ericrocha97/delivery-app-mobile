import React from "react";
import { Button, TextInput } from "react-native-paper";
import { View } from "react-native";


import { SafeAreaViewCustom } from "../../components/safeAreaViewCustom/safeAreaViewCustom.component";
import { HeaderComponent } from "../../components/header/header.component";
import { addressStyle } from "./address.style";

export const AddressScreen = () => {
  /*
    https://www.youtube.com/watch?v=gyaUFh5J_Z0&list=TLPQMTgwNjIwMjFBE6jzr_RjBA&index=4 
    7:30
  */
  return(
    <SafeAreaViewCustom>
      <HeaderComponent title='Address' hasBackButton />
      <View style={addressStyle.marginHorizontal}>
        <TextInput label='Origin' />
        <TextInput label='Destination' />
      </View>
      <View>
        <Button 
          icon='plus' 
          style={addressStyle.buttonIconAdd}
          labelStyle={addressStyle.buttonIconAddLabelStyle}
        > </Button>
      </View>
      <Button 
        style={addressStyle.readyButtonStyle} 
        labelStyle={addressStyle.readyButtonLabelStyle} 
        mode='contained' 
        uppercase={false}
      >
        Ready
      </Button>
    </SafeAreaViewCustom>
  )
};