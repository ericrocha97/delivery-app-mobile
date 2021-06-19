import React from "react";
import { Appbar, FAB, Menu } from 'react-native-paper';
import { Image, View, SafeAreaView } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from "@react-navigation/native";

import { SafeAreaViewCustom } from "../../components/safeAreaViewCustom/safeAreaViewCustom.component";
import { ConfirmDeliveryCardComponent } from "../../components/confirmDeliveryCard/confirmDeliveryCard.components";
import { SearchingDeliveryComponent } from "../../components/searchingDelivery/searchingDelivery.components";
import { HeaderComponent } from "../../components/header/header.component";

import { homeStyle } from "./home.style";

import markerImage from '../../assets/cyclist-icon.png'

export const HomeScreen = () => {

  const navigation = useNavigation();

  function handleNewDelivery() {
    console.log('clicou')
    //navigation.navigate('DeliveryRoute')
  }

  const state: number = 1;

  return(
    <SafeAreaView style={homeStyle.flexView} >
      <HeaderComponent title='Delivery App' />
        <MapView style={homeStyle.flexView} 
          initialRegion={{
            latitude: -24.9556467,
            longitude: -53.4662277,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04
          }}
        >
          { state == 1 ? 
            (
                <>
                  <Marker 
                      description='Delivery person 1'
                      coordinate={{latitude: -24.9566296, longitude: -53.4581483 }} 
                    >
                      <Image 
                        source={markerImage} 
                        style={homeStyle.markerImage}
                      />
                    </Marker>
                  <Marker 
                      description='Delivery person 2'
                      coordinate={{latitude: -24.9579976, longitude: -53.4565973 }} 
                    >
                      <Image 
                        source={markerImage} 
                        style={homeStyle.markerImage}
                      />
                    </Marker>
                  <Marker 
                      description='Delivery person 3'
                      coordinate={{latitude: -24.9555236, longitude: -53.4619072 }} 
                    >
                      <Image 
                        source={markerImage} 
                        style={homeStyle.markerImage}
                      />
                    </Marker>
                </>
            ) : null
          }
          { state == 2 ? 
            (
              <>
                <Marker 
                    description='Origin'
                    coordinate={{latitude: -24.9579976, longitude: -53.4565973 }} 
                  >
                  </Marker>
                <Marker 
                    description='Destination'
                    coordinate={{latitude: -24.9555236, longitude: -53.4619072 }} 
                  >
                  </Marker>
              </>
            ) : null
          }
            
        </MapView>
        {
          state == 1 ?  <FAB style={homeStyle.fab} onPress={handleNewDelivery} icon='plus'  /> : null
        }
        {
          state == 2 ? (
            <ConfirmDeliveryCardComponent />
          ) : null
        }
        {
          state == 3 ?  (
            <SearchingDeliveryComponent />
          ) : null
        }
    </SafeAreaView>
  )
}




