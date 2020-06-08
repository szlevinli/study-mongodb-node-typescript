import { MongoClient, Cursor } from 'mongodb';
import { getConnection, getDB } from './db/connection';
import listDatabases from './list_databases';
import {
  insertOneToInventory,
  insertManyToInventory,
} from './create_documents';
import { inventoryData, InventoryType } from './data/inventoryData';

const main = async () => {
  let mongodbClient: MongoClient = undefined!;
  try {
    mongodbClient = await getConnection();

    await listDatabases(mongodbClient);

    //////////////////////////////////////

    const dbName = 'example';
    const db = await getDB(dbName);

    //////////////////////////////////////

    // const insertOneResult = await insertOneToInventory(db, inventoryData[0]);
    // console.log(
    //   `Insert one result:\n${JSON.stringify(insertOneResult, null, 2)} `
    // );

    // const insertManyResult = await insertManyToInventory(
    //   db,
    //   inventoryData.slice(1)
    // );
    // console.log(
    //   `Insert many result:\n${JSON.stringify(insertManyResult, null, 2)} `
    // );

    //////////////////////////////////////

    await db
      .collection('inventory')
      .find({ qty: { $in: [25, 85] }, item: 'mousepad' })
      .forEach((doc: InventoryType) =>
        console.log(`${JSON.stringify(doc, null, 2)}`)
      );
  } catch (e) {
    console.error(e);
  } finally {
    await mongodbClient.close();
  }
};

main().catch(console.error);
