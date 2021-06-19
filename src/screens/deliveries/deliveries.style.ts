import { StyleSheet } from "react-native";
import { theme } from "../../../App.style";

export const deliveriesStyle = StyleSheet.create({
  content:{
    backgroundColor: '#FFF', 
    flex: 1
  },
  card: {
    margin: 10
  },
  cardStatus: {
      borderTopWidth: 3,
      borderTopColor: "#ffce00"
  },
  cardTitle: {
      color: theme.colors.primary
  },
  price: {
      color: theme.colors.primary,
      fontSize: 16,
      fontWeight: "bold",
      marginEnd: 15
  }
})