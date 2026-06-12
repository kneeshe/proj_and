import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from "react-native";
import { globalStyle } from "../../ux/avard_style";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#1e1e2e", tabBarInactiveTintColor: "#6c7086", tabBarStyle: { backgroundColor: "#89b4fa", borderTopWidth: 2, elevation: 0 }}}>
      <Tabs.Screen name="index" options={{title: "Inicio", tabBarIcon: ({ color, size }) => (<Ionicons name="home" color={color} size={size} />),}}/>
      <Tabs.Screen name="camera" options={{title: "Camera", tabBarIcon: ({ color, size }) => (<Ionicons name="camera" color={color} size={size} />),}}/>
      <Tabs.Screen name="list" options={{title: "Listas", tabBarIcon: ({ color, size }) => (<Ionicons name="list" color={color} size={size} />),}}/>
      <Tabs.Screen name="about" options={{title: "Sobre", tabBarIcon: ({ color, size }) => (<Ionicons name="information-circle" color={color} size={size} />),}}/>
    </Tabs>
  );
}
