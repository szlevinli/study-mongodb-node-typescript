import {
  InsertOneWriteOpResult,
  InsertWriteOpResult,
  WithId,
  Db,
} from 'mongodb';
import { InventoryType } from './data/inventoryData';

export const insertOneToInventory = async (
  db: Db,
  data: InventoryType
): Promise<InsertOneWriteOpResult<WithId<InventoryType>>> => {
  return await db.collection('inventory').insertOne(data);
};

export const insertManyToInventory = async (
  db: Db,
  data: InventoryType[]
): Promise<InsertWriteOpResult<WithId<InventoryType>>> => {
  return await db.collection('inventory').insertMany(data);
};
