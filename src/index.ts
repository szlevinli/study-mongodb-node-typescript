import { MongoClient } from 'mongodb';
import getConnection from './db/connection';
import listDatabases from './list_databases';
import { createOneListing, ListingType } from './create_documents';

const main = async () => {
  let mongodbClient: MongoClient = undefined!;
  try {
    mongodbClient = await getConnection();

    await listDatabases(mongodbClient);

    const myListing: ListingType = {
      name: {
        firstName: 'levin',
        lastName: 'li',
      },
      age: 100,
      addr: 'my address',
      createDate: new Date(),
    };
    createOneListing(mongodbClient, myListing);
  } catch (e) {
    console.error(e);
  } finally {
    await mongodbClient.close();
  }
};

main().catch(console.error);
