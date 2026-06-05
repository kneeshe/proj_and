import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Olá! Você está no Avard. Essa é a tela inicial do app {'\n'}{'\n'}</Text>
      <Text>Se quer ler um código, vá até a aba Camera{'\n'}{'\n'}</Text>
      <Text>Caso queira ver o que já foi lido, vá até Listas{'\n'}{'\n'}</Text>
      <Text>Interessado no desenvolvimento? Vá até a aba Sobre{'\n'}{'\n'}</Text>
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
