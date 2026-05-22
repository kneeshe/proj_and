import * as SQLite from 'expo-sqlite';
import { getDB } from './database';
import { createTable } from './schema';

export async function insertURL(teste: string) {
  const db = await getDB();
  const valor = await db.runAsync(`INSERT INTO TESTE (teste) VALUES (?)`, [teste])
}

export async function readURL() {
  const db = await getDB();
  const scan = await db.getAllAsync(`SELECT * FROM TESTE`);

  return scan;
}
