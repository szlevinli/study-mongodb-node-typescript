import { MongoClient } from 'mongodb';

const listDatabases = async (client: MongoClient): Promise<void> => {
  const databasesList = await client.db().admin().listDatabases();

  console.log('Databases');
  databasesList.databases.forEach((db: { name: string }) =>
    console.log(` - ${db.name}`)
  );
};

export default listDatabases;
