// src/db.js
import { openDB } from 'idb';

const DB_NAME = 'my-database';
const STORE_NAME = 'AllTasks';

async function initDB() {
  const db = await openDB(DB_NAME, 1, {
    upgrade(db) {
      db.createObjectStore(STORE_NAME, { keyPath: 'id' });
    },
  });
  return db;
}

export async function addItem(item) {
  const db = await initDB();
  await db.put(STORE_NAME, item);
}

export async function getItem(id) {
  const db = await initDB();
  return await db.get(STORE_NAME, id);
}

export async function getAllItems() {
  const db = await initDB();
  return await db.getAll(STORE_NAME);
}

export async function deleteItem(id) {
  const db = await initDB();
  await db.delete(STORE_NAME, id);
}

export async function deleteAllItems() {
  const db = await initDB();
  await db.clear(STORE_NAME);
}

export async function getHighestId() {
  const db = await initDB();
  const items = await db.getAll(STORE_NAME);
  return items.reduce((maxId, item) => (item.id > maxId ? item.id : maxId), 0);
}