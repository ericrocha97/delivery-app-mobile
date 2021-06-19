import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../../App.style";

export const registerStyle = StyleSheet.create({
  content: {
    padding: 15,
    paddingTop: 0,
    backgroundColor: '#FFF',
    flex: 1,
    height: Dimensions.get('window').height,
  },
  icon: {
    color: theme.colors.primary
  },
  button: {
    marginVertical: 15,
  }
})