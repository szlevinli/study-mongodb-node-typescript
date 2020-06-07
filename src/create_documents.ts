import { MongoClient, InsertOneWriteOpResult, WithId } from 'mongodb';

export type ListingType = {
  name: {
    firstName: string;
    lastName: string;
  };
  age: number;
  addr: string;
  createDate: Date;
};

export const createOneListing = async (
  client: MongoClient,
  newListing: ListingType,
  dbName = 'example'
): Promise<InsertOneWriteOpResult<WithId<ListingType>>> => {
  const result = await client
    .db(dbName)
    .collection('list')
    .insertOne(newListing);
  console.log(
    `insertOne return object is \n ${JSON.stringify(result, null, 2)}`
  );
  return result;
};
