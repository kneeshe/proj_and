import { Text, View, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');


export const globalStyle = StyleSheet.create({
  catppuccin: {
   backgroundColor: "#89b4fa",
   flex: 1,
   alignItems: "center",
   justifyContent: "center",
  },
  catText: {
    fontFamily: "Roboto",
    fontSize: 26,
    textAlign: "center",
    color: "#11111b",
  },
  catCamera: {
    width: 300,
    height: 300,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#f38ba8",
  }
})
