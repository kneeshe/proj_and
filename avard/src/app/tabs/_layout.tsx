import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index"/>
      <Tabs.Screen name="camera"/>
      <Tabs.Screen name="list"/>
      <Tabs.Screen name="about"/>
    </Tabs>
  );
}
