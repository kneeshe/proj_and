import { Text, View, StyleSheet } from "react-native";
import { globalStyle } from "../../ux/avard_style";

export default function Index() {
  return (
    <View style={globalStyle.catppuccin}>
      <Text style={globalStyle.catText}>Olá! Você está no Avard. Essa é a tela inicial do app {'\n'}{'\n'}</Text>
      <Text style={globalStyle.catText}>Se quer ler um código, vá até a aba Camera{'\n'}{'\n'}</Text>
      <Text style={globalStyle.catText}>Caso queira ver o que já foi lido, vá até Listas{'\n'}{'\n'}</Text>
      <Text style={globalStyle.catText}>Interessado no desenvolvimento? Vá até a aba Sobre{'\n'}{'\n'}</Text>
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
