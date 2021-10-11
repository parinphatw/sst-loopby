// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Categories = {
  "SHIRT": "SHIRT",
  "SHORTS": "SHORTS",
  "T_SHIRT": "T_SHIRT",
  "PANTS": "PANTS",
  "BRANDNAME": "BRANDNAME",
  "DRESS": "DRESS",
  "TOPTANK": "TOPTANK"
};

const { User, Shop, UserShop, Todo } = initSchema(schema);

export {
  User,
  Shop,
  UserShop,
  Todo,
  Categories
};