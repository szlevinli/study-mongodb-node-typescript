import { MongoClient } from 'mongodb';
import config from './db_config';

let _mongodbClient: MongoClient;

const getConnection = async (): Promise<MongoClient> => {
  if (_mongodbClient) {
    return _mongodbClient;
  }

  _mongodbClient = await new MongoClient(config.URI, {
    useUnifiedTopology: true,
  }).connect();

  return _mongodbClient;
};

export default getConnection;
