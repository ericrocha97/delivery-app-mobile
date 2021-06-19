import React from "react";
import { View, Text, FlatList } from "react-native";
import { Card } from "react-native-paper";


import { SafeAreaViewCustom } from "../../components/safeAreaViewCustom/safeAreaViewCustom.component";
import { HeaderComponent } from "../../components/header/header.component";

import { deliveriesStyle } from "./deliveries.style";


export const DeliveriesScreen = () => {

  const deliveries: number[] = [1,2,3,4,5]
  
  return(
    <SafeAreaViewCustom>
      <HeaderComponent title='My deliveries' hasBackButton />
      <View style={deliveriesStyle.content}>
        <FlatList 
          data={deliveries}
          keyExtractor={(item, index) => `deliveries${index}`}
          renderItem={({item, index}) =>
            <Card style={{...deliveriesStyle.card, ...deliveriesStyle.cardStatus}}>
              <Card.Cover source={{uri: 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-53.4662,-24.9556,13,0/600x350?access_token=pk.eyJ1IjoiZXJpY3JvY2hhOTciLCJhIjoiY2tnNm9yMHdzMG81NjJybXAyMjQ2MHoyNiJ9.Tt2BBSo9yZURBbjlf7AEKQ'}} />
              <Card.Title
                title='02/27/2077'
                titleStyle={deliveriesStyle.cardTitle}
                subtitle='Someone'
                right={() => <Text style={deliveriesStyle.price}>$ 30,00</Text>}
              />
            </Card>
          }
        />
        
      </View>
    </SafeAreaViewCustom>
  )
}