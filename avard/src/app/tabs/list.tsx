import { Text, View, StyleSheet, FlatList, } from "react-native";
import * as SQLite from 'expo-sqlite';
import * as CRUD from '../../db/crud';
import { getDB } from "@/db/database";
import { createTable } from "@/db/schema";
import { useEffect, useState } from "react";

interface TesteItem {
  id: number;
  teste: string;
}

export default function Index() {
  const [items, setItems] = useState<TesteItem[]>([]);

  useEffect(() => {
    const initAndLoad = async () => {
      try {
        await getDB();
        await createTable();
    const allRows = await CRUD.readURL();
    setItems(allRows as TesteItem[]);
       
      } catch (j) {
        console.error("Algum erro ai", j);
      }
    };
    initAndLoad();
  }, [])


  return (
    <View style={styles.container}>
      <Text>AQUI VAI TER UMA LISTA... EVENTUALMENTE</Text>
      <FlatList 
      data={items}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => ( <Text>{item.teste}</Text> )} />
    </View>
  );
}

getDB();
createTable();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
