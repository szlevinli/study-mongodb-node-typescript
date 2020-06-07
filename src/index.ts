import getConnection from './db/connection';
import listDatabases from './list_databases';
import { MongoClient } from 'mongodb';

const main = async () => {
  let mongodbClient: MongoClient = undefined!;
  try {
    mongodbClient = await getConnection();
    await listDatabases(mongodbClient);
  } catch (e) {
    console.error(e);
  } finally {
    await mongodbClient.close();
  }
};

main().catch(console.error);
