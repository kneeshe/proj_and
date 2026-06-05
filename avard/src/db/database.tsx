import * as SQLite from 'expo-sqlite';

export const insertData = async (data: string) => {
  try {
    const db = await SQLite.openDatabaseAsync("db_avard");

    await db.execAsync(`
                   PRAGMA journal_mode = WAL;
                   CREATE TABLE IF NOT EXISTS avard_qrCode ( id INTEGER PRIMARY KEY NOT NULL, valor TEXT NOT NULL );
                   `);

    await db.runAsync ('INSERT INTO avard_qrCode (valor) VALUES (?)', {data});

  } catch (error) {
   console.log("Falhou na inserção", error); 
  }
}

export const readData = async () => {
  try {
    const db = await SQLite.openDatabaseAsync("db_avard");
    
    const allRows = await db.getAllAsync("SELECT * FROM db_avard");
    
  } catch (error) {
   console.log("Falhou na leitura", error); 
  }
}
