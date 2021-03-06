import React from "react";
import { Button, TextInput } from "react-native-paper";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";


import { SafeAreaViewCustom } from "../../components/safeAreaViewCustom/safeAreaViewCustom.component";
import { HeaderComponent } from "../../components/header/header.component";
import { deliveryRouteStyle } from "./deliveryRoute.style";

export const DeliveryRouteScreen = () => {

  const navigation = useNavigation();

  const destinations: number[] = [1,2];

  function handleSubmit() {
    navigation.navigate('Delivery')
  }

  return(
    <SafeAreaViewCustom>
      <HeaderComponent title='Address' hasBackButton navigation={navigation} />
      <View style={deliveryRouteStyle.container}>
        <View style={deliveryRouteStyle.marginHorizontal}>
          <TextInput label='Origin' />
          {
            destinations.map((destination: number, index: number) =>
              <TextInput 
                key={`destination${index}`} 
                label='Destination' 
                right={
                  destinations.length > 1 ?
                  <TextInput.Icon 
                    name='close' 
                    color={deliveryRouteStyle.buttonIconRemove.color} 
                    style={deliveryRouteStyle.buttonIconRemove}
                  /> : null
                }
              />
            )
          }
        </View>
        <View>
          <Button 
            icon='plus' 
            style={deliveryRouteStyle.buttonIconAdd}
            labelStyle={deliveryRouteStyle.buttonIconAddLabelStyle}
          > </Button>
        </View>
        <Button 
          style={deliveryRouteStyle.readyButtonStyle} 
          labelStyle={deliveryRouteStyle.readyButtonLabelStyle} 
          mode='contained' 
          uppercase={false}
          onPress={handleSubmit}
        >
          Ready
        </Button>
      </View>
    </SafeAreaViewCustom>
  )
};