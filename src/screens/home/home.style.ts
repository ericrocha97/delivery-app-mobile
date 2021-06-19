import { Dimensions, Platform, StyleSheet } from "react-native";
import { theme } from "../../../App.style";

export const homeStyle = StyleSheet.create({
  flexView: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: 16,
    marginBottom: Platform.OS === 'ios' ? 48 : 16,
    backgroundColor: theme.colors.primary,
  },
  markerImage: {
    width: 35,
    height: 35
  },
})