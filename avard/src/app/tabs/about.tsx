import { Text, View, StyleSheet, Linking } from "react-native";
import { globalStyle } from "../../ux/avard_style";

export default function AboutScreen() {
  return (
    // <View style={styles.container}>
      <View style={globalStyle.catppuccin}>
      <Text style={globalStyle.catText}>
        Aplicativo desenvolvido para a matéria extensionista de desenvolvimento mobile.
        {'\n'}
        {'\n'}
     </Text>
      <Text style={globalStyle.catText}>Para duvidas, questões, ou informações do código, por favor, visite a nossa página do github:
          {'\n'}
          {'\n'}
 </Text>
      <Text style={globalStyle.catText}> Página do Github (https://github.com/kneeshe/proj_and) </Text>
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
