import * as SQLite from 'expo-sqlite';
import { getDB } from './database';
export async function createTable() {
  const db = await getDB();

  await db.execAsync(`
                     CREATE TABLE IF NOT EXISTS TESTE (
                       id INT PRIMARY KEY,
                       teste TEXT NOT NULL
                     )`);
}


