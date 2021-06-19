import React from "react";
import { View, Text } from "react-native";
import MapView from "react-native-maps";
import { Avatar, Card, List } from "react-native-paper";

import { SafeAreaViewCustom } from "../../components/safeAreaViewCustom/safeAreaViewCustom.component";
import { HeaderComponent } from "../../components/header/header.component";

import { deliveryStyle } from "./delivery.style";
import { useNavigation } from "@react-navigation/native";


export const DeliveryScreen = () => {
  
  const navigation = useNavigation();

  return(
    <SafeAreaViewCustom>
      <HeaderComponent title='Delivery details' hasBackButton navigation={navigation} />
      <View style={deliveryStyle.content}>
        <View style={deliveryStyle.content}>
          <MapView style={deliveryStyle.mapView} 
              initialRegion={{
                latitude: -24.9556467,
                longitude: -53.4662277,
                latitudeDelta: 0.09,
                longitudeDelta: 0.04
              }}
            >
              
            </MapView>
          </View>
          <Card>
            <Card.Title 
              title="02/27/2077"
              titleStyle={deliveryStyle.cardTitle}
              right={() => <Text style={deliveryStyle.price}>$ 30,00</Text>}
            > </Card.Title>
            <Card.Content>
              <List.Item 
                title='Someone' 
                description='24 deliveries' 
                left={() => 
                  <Avatar.Image 
                    size={52}
                    source={{uri: 'https://i.pravatar.cc/300'}}
                  />
                }
              />
            </Card.Content>
            <List.Item 
                title='Origin' 
                description='Origin street, 60' 
                left={() => 
                  <List.Icon icon='flag-outline' />
                }
            />
            <List.Item 
                title='Destination' 
                description='Destination street, 60' 
                left={() => 
                  <List.Icon icon='flag-checkered' />
                }
            />
          </Card>
      </View>
    </SafeAreaViewCustom>
  )

}