import { Text, View, StyleSheet, FlatList, } from "react-native";
import { useEffect, useState } from "react";

export default function Index() {

  return (
    <View style={styles.container}>
      <Text>AQUI VAI TER UMA LISTA... EVENTUALMENTE</Text>
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
