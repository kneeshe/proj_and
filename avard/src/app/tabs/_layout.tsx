import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons/Ionicons';




export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{title: "Inicio", tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
 }}/>
      <Tabs.Screen name="camera" options={{title: "Camera"}}/>
      <Tabs.Screen name="list" options={{title: "Listas"}}/>
      <Tabs.Screen name="about" options={{title: "Sobre"}}/>
    </Tabs>
  );
}
