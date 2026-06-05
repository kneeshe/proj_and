import { Text, View, StyleSheet, Linking } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text>
        Aplicativo desenvolvido para a matéria extensionista de desenvolvimento mobile.
        {'\n'}
        {'\n'}
     </Text>
      <Text>Para duvidas, questões, ou informações do código, por favor, visite a nossa página do github:
          {'\n'}
          {'\n'}
 </Text>
      <Text> Página do Github (https://github.com/kneeshe/proj_and) </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
