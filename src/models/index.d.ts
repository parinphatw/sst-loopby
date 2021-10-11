import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Categories {
  SHIRT = "SHIRT",
  SHORTS = "SHORTS",
  T_SHIRT = "T_SHIRT",
  PANTS = "PANTS",
  BRANDNAME = "BRANDNAME",
  DRESS = "DRESS",
  TOPTANK = "TOPTANK"
}



type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ShopMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserShopMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class User {
  readonly id: string;
  readonly Firstname: string;
  readonly Lastname: string;
  readonly Address: string;
  readonly email: string;
  readonly OWN?: (Shop | null)[];
  readonly UserLovesShops?: (UserShop | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Shop {
  readonly id: string;
  readonly name: string;
  readonly categories?: Categories[] | keyof typeof Categories;
  readonly userID?: string;
  readonly users?: (UserShop | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Shop, ShopMetaData>);
  static copyOf(source: Shop, mutator: (draft: MutableModel<Shop, ShopMetaData>) => MutableModel<Shop, ShopMetaData> | void): Shop;
}

export declare class UserShop {
  readonly id: string;
  readonly user: User;
  readonly shop: Shop;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserShop, UserShopMetaData>);
  static copyOf(source: UserShop, mutator: (draft: MutableModel<UserShop, UserShopMetaData>) => MutableModel<UserShop, UserShopMetaData> | void): UserShop;
}

export declare class Todo {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Todo, TodoMetaData>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}