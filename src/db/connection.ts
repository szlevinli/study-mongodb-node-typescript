import { MongoClient, Db } from 'mongodb';
import config from './db_config';

let _mongodbClient: MongoClient;

export const getConnection = async (): Promise<MongoClient> => {
  if (_mongodbClient) {
    return _mongodbClient;
  }

  _mongodbClient = await new MongoClient(config.URI, {
    useUnifiedTopology: true,
  }).connect();

  return _mongodbClient;
};

export const getDB = async (DBName: string): Promise<Db> => {
  return (await getConnection()).db(DBName);
};
