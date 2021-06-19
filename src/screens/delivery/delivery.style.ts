import { StyleSheet } from "react-native";
import { theme } from "../../../App.style";

export const deliveryStyle = StyleSheet.create({
  content:{
    backgroundColor: '#FFF', 
    flex: 1
  },
  mapView: {
    flex: 1
  },
  cardTitle: {
    color: theme.colors.primary
  },
  price: {
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
    marginEnd: 15
  }
})