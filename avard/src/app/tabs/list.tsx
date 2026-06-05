import { Text, View, StyleSheet, FlatList, } from "react-native";
import { SafeAreaView, SafeAreaProvider, } from 'react-native-safe-area-context';
import { useEffect, useState } from "react";
import { readData } from "@/db/database";

export default function List() {

  const DATA = [ { id: '1', title: "teste 1" }, { id: '2', title: "teste 2" }, { id: '3', title: "teste 3" },  ];


  type ItemProps = {title: string};
  const Item = ( {title}: ItemProps ) => (
    <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>AQUI VAI TER UMA LISTA... EVENTUALMENTE</Text>
      <SafeAreaProvider>
      <SafeAreaView>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={ item => item.id }
        />
      </SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    backgroundColor: 'red',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
