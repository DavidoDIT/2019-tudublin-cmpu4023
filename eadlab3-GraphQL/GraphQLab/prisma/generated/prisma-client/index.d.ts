// Code generated by Prisma (prisma@1.28.0). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  categories: (where?: CategoriesWhereInput) => Promise<boolean>;
  inventory: (where?: InventoryWhereInput) => Promise<boolean>;
  products: (where?: ProductsWhereInput) => Promise<boolean>;
  reorder: (where?: ReorderWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  categories: (where: CategoriesWhereUniqueInput) => CategoriesPromise;
  categorieses: (
    args?: {
      where?: CategoriesWhereInput;
      orderBy?: CategoriesOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Categories>;
  categoriesesConnection: (
    args?: {
      where?: CategoriesWhereInput;
      orderBy?: CategoriesOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => CategoriesConnectionPromise;
  inventories: (
    args?: {
      where?: InventoryWhereInput;
      orderBy?: InventoryOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Inventory>;
  inventoriesConnection: (
    args?: {
      where?: InventoryWhereInput;
      orderBy?: InventoryOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => InventoryConnectionPromise;
  products: (where: ProductsWhereUniqueInput) => ProductsPromise;
  productses: (
    args?: {
      where?: ProductsWhereInput;
      orderBy?: ProductsOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Products>;
  productsesConnection: (
    args?: {
      where?: ProductsWhereInput;
      orderBy?: ProductsOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => ProductsConnectionPromise;
  reorders: (
    args?: {
      where?: ReorderWhereInput;
      orderBy?: ReorderOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Reorder>;
  reordersConnection: (
    args?: {
      where?: ReorderWhereInput;
      orderBy?: ReorderOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => ReorderConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createCategories: (data: CategoriesCreateInput) => CategoriesPromise;
  updateCategories: (
    args: { data: CategoriesUpdateInput; where: CategoriesWhereUniqueInput }
  ) => CategoriesPromise;
  updateManyCategorieses: (
    args: {
      data: CategoriesUpdateManyMutationInput;
      where?: CategoriesWhereInput;
    }
  ) => BatchPayloadPromise;
  upsertCategories: (
    args: {
      where: CategoriesWhereUniqueInput;
      create: CategoriesCreateInput;
      update: CategoriesUpdateInput;
    }
  ) => CategoriesPromise;
  deleteCategories: (where: CategoriesWhereUniqueInput) => CategoriesPromise;
  deleteManyCategorieses: (where?: CategoriesWhereInput) => BatchPayloadPromise;
  createInventory: (data: InventoryCreateInput) => InventoryPromise;
  updateManyInventories: (
    args: {
      data: InventoryUpdateManyMutationInput;
      where?: InventoryWhereInput;
    }
  ) => BatchPayloadPromise;
  deleteManyInventories: (where?: InventoryWhereInput) => BatchPayloadPromise;
  createProducts: (data: ProductsCreateInput) => ProductsPromise;
  updateProducts: (
    args: { data: ProductsUpdateInput; where: ProductsWhereUniqueInput }
  ) => ProductsPromise;
  updateManyProductses: (
    args: { data: ProductsUpdateManyMutationInput; where?: ProductsWhereInput }
  ) => BatchPayloadPromise;
  upsertProducts: (
    args: {
      where: ProductsWhereUniqueInput;
      create: ProductsCreateInput;
      update: ProductsUpdateInput;
    }
  ) => ProductsPromise;
  deleteProducts: (where: ProductsWhereUniqueInput) => ProductsPromise;
  deleteManyProductses: (where?: ProductsWhereInput) => BatchPayloadPromise;
  createReorder: (data: ReorderCreateInput) => ReorderPromise;
  updateManyReorders: (
    args: { data: ReorderUpdateManyMutationInput; where?: ReorderWhereInput }
  ) => BatchPayloadPromise;
  deleteManyReorders: (where?: ReorderWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  categories: (
    where?: CategoriesSubscriptionWhereInput
  ) => CategoriesSubscriptionPayloadSubscription;
  inventory: (
    where?: InventorySubscriptionWhereInput
  ) => InventorySubscriptionPayloadSubscription;
  products: (
    where?: ProductsSubscriptionWhereInput
  ) => ProductsSubscriptionPayloadSubscription;
  reorder: (
    where?: ReorderSubscriptionWhereInput
  ) => ReorderSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type CategoriesOrderByInput =
  | "category_ASC"
  | "category_DESC"
  | "categoryname_ASC"
  | "categoryname_DESC"
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type InventoryOrderByInput =
  | "quan_in_stock_ASC"
  | "quan_in_stock_DESC"
  | "sales_ASC"
  | "sales_DESC"
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type ProductsOrderByInput =
  | "prod_id_ASC"
  | "prod_id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "actor_ASC"
  | "actor_DESC"
  | "price_ASC"
  | "price_DESC"
  | "special_ASC"
  | "special_DESC"
  | "common_prod_id_ASC"
  | "common_prod_id_DESC"
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type ReorderOrderByInput =
  | "date_low_ASC"
  | "date_low_DESC"
  | "quan_low_ASC"
  | "quan_low_DESC"
  | "date_reordered_ASC"
  | "date_reordered_DESC"
  | "quan_reordered_ASC"
  | "quan_reordered_DESC"
  | "date_expected_ASC"
  | "date_expected_DESC"
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type CategoriesWhereUniqueInput = AtLeastOne<{
  category: ID_Input;
}>;

export interface CategoriesWhereInput {
  category?: ID_Input;
  category_not?: ID_Input;
  category_in?: ID_Input[] | ID_Input;
  category_not_in?: ID_Input[] | ID_Input;
  category_lt?: ID_Input;
  category_lte?: ID_Input;
  category_gt?: ID_Input;
  category_gte?: ID_Input;
  category_contains?: ID_Input;
  category_not_contains?: ID_Input;
  category_starts_with?: ID_Input;
  category_not_starts_with?: ID_Input;
  category_ends_with?: ID_Input;
  category_not_ends_with?: ID_Input;
  categoryname?: String;
  categoryname_not?: String;
  categoryname_in?: String[] | String;
  categoryname_not_in?: String[] | String;
  categoryname_lt?: String;
  categoryname_lte?: String;
  categoryname_gt?: String;
  categoryname_gte?: String;
  categoryname_contains?: String;
  categoryname_not_contains?: String;
  categoryname_starts_with?: String;
  categoryname_not_starts_with?: String;
  categoryname_ends_with?: String;
  categoryname_not_ends_with?: String;
  AND?: CategoriesWhereInput[] | CategoriesWhereInput;
  OR?: CategoriesWhereInput[] | CategoriesWhereInput;
  NOT?: CategoriesWhereInput[] | CategoriesWhereInput;
}

export interface InventoryWhereInput {
  prod_id_every?: ProductsWhereInput;
  prod_id_some?: ProductsWhereInput;
  prod_id_none?: ProductsWhereInput;
  quan_in_stock?: Int;
  quan_in_stock_not?: Int;
  quan_in_stock_in?: Int[] | Int;
  quan_in_stock_not_in?: Int[] | Int;
  quan_in_stock_lt?: Int;
  quan_in_stock_lte?: Int;
  quan_in_stock_gt?: Int;
  quan_in_stock_gte?: Int;
  sales?: Int;
  sales_not?: Int;
  sales_in?: Int[] | Int;
  sales_not_in?: Int[] | Int;
  sales_lt?: Int;
  sales_lte?: Int;
  sales_gt?: Int;
  sales_gte?: Int;
  AND?: InventoryWhereInput[] | InventoryWhereInput;
  OR?: InventoryWhereInput[] | InventoryWhereInput;
  NOT?: InventoryWhereInput[] | InventoryWhereInput;
}

export interface ProductsWhereInput {
  prod_id?: ID_Input;
  prod_id_not?: ID_Input;
  prod_id_in?: ID_Input[] | ID_Input;
  prod_id_not_in?: ID_Input[] | ID_Input;
  prod_id_lt?: ID_Input;
  prod_id_lte?: ID_Input;
  prod_id_gt?: ID_Input;
  prod_id_gte?: ID_Input;
  prod_id_contains?: ID_Input;
  prod_id_not_contains?: ID_Input;
  prod_id_starts_with?: ID_Input;
  prod_id_not_starts_with?: ID_Input;
  prod_id_ends_with?: ID_Input;
  prod_id_not_ends_with?: ID_Input;
  category_every?: CategoriesWhereInput;
  category_some?: CategoriesWhereInput;
  category_none?: CategoriesWhereInput;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  actor?: String;
  actor_not?: String;
  actor_in?: String[] | String;
  actor_not_in?: String[] | String;
  actor_lt?: String;
  actor_lte?: String;
  actor_gt?: String;
  actor_gte?: String;
  actor_contains?: String;
  actor_not_contains?: String;
  actor_starts_with?: String;
  actor_not_starts_with?: String;
  actor_ends_with?: String;
  actor_not_ends_with?: String;
  price?: Int;
  price_not?: Int;
  price_in?: Int[] | Int;
  price_not_in?: Int[] | Int;
  price_lt?: Int;
  price_lte?: Int;
  price_gt?: Int;
  price_gte?: Int;
  special?: Int;
  special_not?: Int;
  special_in?: Int[] | Int;
  special_not_in?: Int[] | Int;
  special_lt?: Int;
  special_lte?: Int;
  special_gt?: Int;
  special_gte?: Int;
  common_prod_id?: Int;
  common_prod_id_not?: Int;
  common_prod_id_in?: Int[] | Int;
  common_prod_id_not_in?: Int[] | Int;
  common_prod_id_lt?: Int;
  common_prod_id_lte?: Int;
  common_prod_id_gt?: Int;
  common_prod_id_gte?: Int;
  AND?: ProductsWhereInput[] | ProductsWhereInput;
  OR?: ProductsWhereInput[] | ProductsWhereInput;
  NOT?: ProductsWhereInput[] | ProductsWhereInput;
}

export type ProductsWhereUniqueInput = AtLeastOne<{
  prod_id: ID_Input;
}>;

export interface ReorderWhereInput {
  prod_id_every?: ProductsWhereInput;
  prod_id_some?: ProductsWhereInput;
  prod_id_none?: ProductsWhereInput;
  date_low?: DateTimeInput;
  date_low_not?: DateTimeInput;
  date_low_in?: DateTimeInput[] | DateTimeInput;
  date_low_not_in?: DateTimeInput[] | DateTimeInput;
  date_low_lt?: DateTimeInput;
  date_low_lte?: DateTimeInput;
  date_low_gt?: DateTimeInput;
  date_low_gte?: DateTimeInput;
  quan_low?: Int;
  quan_low_not?: Int;
  quan_low_in?: Int[] | Int;
  quan_low_not_in?: Int[] | Int;
  quan_low_lt?: Int;
  quan_low_lte?: Int;
  quan_low_gt?: Int;
  quan_low_gte?: Int;
  date_reordered?: DateTimeInput;
  date_reordered_not?: DateTimeInput;
  date_reordered_in?: DateTimeInput[] | DateTimeInput;
  date_reordered_not_in?: DateTimeInput[] | DateTimeInput;
  date_reordered_lt?: DateTimeInput;
  date_reordered_lte?: DateTimeInput;
  date_reordered_gt?: DateTimeInput;
  date_reordered_gte?: DateTimeInput;
  quan_reordered?: Int;
  quan_reordered_not?: Int;
  quan_reordered_in?: Int[] | Int;
  quan_reordered_not_in?: Int[] | Int;
  quan_reordered_lt?: Int;
  quan_reordered_lte?: Int;
  quan_reordered_gt?: Int;
  quan_reordered_gte?: Int;
  date_expected?: DateTimeInput;
  date_expected_not?: DateTimeInput;
  date_expected_in?: DateTimeInput[] | DateTimeInput;
  date_expected_not_in?: DateTimeInput[] | DateTimeInput;
  date_expected_lt?: DateTimeInput;
  date_expected_lte?: DateTimeInput;
  date_expected_gt?: DateTimeInput;
  date_expected_gte?: DateTimeInput;
  AND?: ReorderWhereInput[] | ReorderWhereInput;
  OR?: ReorderWhereInput[] | ReorderWhereInput;
  NOT?: ReorderWhereInput[] | ReorderWhereInput;
}

export interface CategoriesCreateInput {
  category: ID_Input;
  categoryname: String;
}

export interface CategoriesUpdateInput {
  category?: ID_Input;
  categoryname?: String;
}

export interface CategoriesUpdateManyMutationInput {
  category?: ID_Input;
  categoryname?: String;
}

export interface InventoryCreateInput {
  prod_id?: ProductsCreateManyInput;
  quan_in_stock: Int;
  sales: Int;
}

export interface ProductsCreateManyInput {
  create?: ProductsCreateInput[] | ProductsCreateInput;
  connect?: ProductsWhereUniqueInput[] | ProductsWhereUniqueInput;
}

export interface ProductsCreateInput {
  prod_id?: ID_Input;
  category?: CategoriesCreateManyInput;
  title?: String;
  actor: String;
  price: Int;
  special: Int;
  common_prod_id?: Int;
}

export interface CategoriesCreateManyInput {
  create?: CategoriesCreateInput[] | CategoriesCreateInput;
  connect?: CategoriesWhereUniqueInput[] | CategoriesWhereUniqueInput;
}

export interface InventoryUpdateManyMutationInput {
  quan_in_stock?: Int;
  sales?: Int;
}

export interface ProductsUpdateInput {
  prod_id?: ID_Input;
  category?: CategoriesUpdateManyInput;
  title?: String;
  actor?: String;
  price?: Int;
  special?: Int;
  common_prod_id?: Int;
}

export interface CategoriesUpdateManyInput {
  create?: CategoriesCreateInput[] | CategoriesCreateInput;
  update?:
    | CategoriesUpdateWithWhereUniqueNestedInput[]
    | CategoriesUpdateWithWhereUniqueNestedInput;
  upsert?:
    | CategoriesUpsertWithWhereUniqueNestedInput[]
    | CategoriesUpsertWithWhereUniqueNestedInput;
  delete?: CategoriesWhereUniqueInput[] | CategoriesWhereUniqueInput;
  connect?: CategoriesWhereUniqueInput[] | CategoriesWhereUniqueInput;
  set?: CategoriesWhereUniqueInput[] | CategoriesWhereUniqueInput;
  disconnect?: CategoriesWhereUniqueInput[] | CategoriesWhereUniqueInput;
  deleteMany?: CategoriesScalarWhereInput[] | CategoriesScalarWhereInput;
  updateMany?:
    | CategoriesUpdateManyWithWhereNestedInput[]
    | CategoriesUpdateManyWithWhereNestedInput;
}

export interface CategoriesUpdateWithWhereUniqueNestedInput {
  where: CategoriesWhereUniqueInput;
  data: CategoriesUpdateDataInput;
}

export interface CategoriesUpdateDataInput {
  category?: ID_Input;
  categoryname?: String;
}

export interface CategoriesUpsertWithWhereUniqueNestedInput {
  where: CategoriesWhereUniqueInput;
  update: CategoriesUpdateDataInput;
  create: CategoriesCreateInput;
}

export interface CategoriesScalarWhereInput {
  category?: ID_Input;
  category_not?: ID_Input;
  category_in?: ID_Input[] | ID_Input;
  category_not_in?: ID_Input[] | ID_Input;
  category_lt?: ID_Input;
  category_lte?: ID_Input;
  category_gt?: ID_Input;
  category_gte?: ID_Input;
  category_contains?: ID_Input;
  category_not_contains?: ID_Input;
  category_starts_with?: ID_Input;
  category_not_starts_with?: ID_Input;
  category_ends_with?: ID_Input;
  category_not_ends_with?: ID_Input;
  categoryname?: String;
  categoryname_not?: String;
  categoryname_in?: String[] | String;
  categoryname_not_in?: String[] | String;
  categoryname_lt?: String;
  categoryname_lte?: String;
  categoryname_gt?: String;
  categoryname_gte?: String;
  categoryname_contains?: String;
  categoryname_not_contains?: String;
  categoryname_starts_with?: String;
  categoryname_not_starts_with?: String;
  categoryname_ends_with?: String;
  categoryname_not_ends_with?: String;
  AND?: CategoriesScalarWhereInput[] | CategoriesScalarWhereInput;
  OR?: CategoriesScalarWhereInput[] | CategoriesScalarWhereInput;
  NOT?: CategoriesScalarWhereInput[] | CategoriesScalarWhereInput;
}

export interface CategoriesUpdateManyWithWhereNestedInput {
  where: CategoriesScalarWhereInput;
  data: CategoriesUpdateManyDataInput;
}

export interface CategoriesUpdateManyDataInput {
  category?: ID_Input;
  categoryname?: String;
}

export interface ProductsUpdateManyMutationInput {
  prod_id?: ID_Input;
  title?: String;
  actor?: String;
  price?: Int;
  special?: Int;
  common_prod_id?: Int;
}

export interface ReorderCreateInput {
  prod_id?: ProductsCreateManyInput;
  date_low: DateTimeInput;
  quan_low: Int;
  date_reordered: DateTimeInput;
  quan_reordered: Int;
  date_expected: DateTimeInput;
}

export interface ReorderUpdateManyMutationInput {
  date_low?: DateTimeInput;
  quan_low?: Int;
  date_reordered?: DateTimeInput;
  quan_reordered?: Int;
  date_expected?: DateTimeInput;
}

export interface CategoriesSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: CategoriesWhereInput;
  AND?: CategoriesSubscriptionWhereInput[] | CategoriesSubscriptionWhereInput;
  OR?: CategoriesSubscriptionWhereInput[] | CategoriesSubscriptionWhereInput;
  NOT?: CategoriesSubscriptionWhereInput[] | CategoriesSubscriptionWhereInput;
}

export interface InventorySubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: InventoryWhereInput;
  AND?: InventorySubscriptionWhereInput[] | InventorySubscriptionWhereInput;
  OR?: InventorySubscriptionWhereInput[] | InventorySubscriptionWhereInput;
  NOT?: InventorySubscriptionWhereInput[] | InventorySubscriptionWhereInput;
}

export interface ProductsSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ProductsWhereInput;
  AND?: ProductsSubscriptionWhereInput[] | ProductsSubscriptionWhereInput;
  OR?: ProductsSubscriptionWhereInput[] | ProductsSubscriptionWhereInput;
  NOT?: ProductsSubscriptionWhereInput[] | ProductsSubscriptionWhereInput;
}

export interface ReorderSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ReorderWhereInput;
  AND?: ReorderSubscriptionWhereInput[] | ReorderSubscriptionWhereInput;
  OR?: ReorderSubscriptionWhereInput[] | ReorderSubscriptionWhereInput;
  NOT?: ReorderSubscriptionWhereInput[] | ReorderSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Categories {
  category: ID_Output;
  categoryname: String;
}

export interface CategoriesPromise extends Promise<Categories>, Fragmentable {
  category: () => Promise<ID_Output>;
  categoryname: () => Promise<String>;
}

export interface CategoriesSubscription
  extends Promise<AsyncIterator<Categories>>,
    Fragmentable {
  category: () => Promise<AsyncIterator<ID_Output>>;
  categoryname: () => Promise<AsyncIterator<String>>;
}

export interface CategoriesConnection {
  pageInfo: PageInfo;
  edges: CategoriesEdge[];
}

export interface CategoriesConnectionPromise
  extends Promise<CategoriesConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<CategoriesEdge>>() => T;
  aggregate: <T = AggregateCategoriesPromise>() => T;
}

export interface CategoriesConnectionSubscription
  extends Promise<AsyncIterator<CategoriesConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<CategoriesEdgeSubscription>>>() => T;
  aggregate: <T = AggregateCategoriesSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface CategoriesEdge {
  node: Categories;
  cursor: String;
}

export interface CategoriesEdgePromise
  extends Promise<CategoriesEdge>,
    Fragmentable {
  node: <T = CategoriesPromise>() => T;
  cursor: () => Promise<String>;
}

export interface CategoriesEdgeSubscription
  extends Promise<AsyncIterator<CategoriesEdge>>,
    Fragmentable {
  node: <T = CategoriesSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateCategories {
  count: Int;
}

export interface AggregateCategoriesPromise
  extends Promise<AggregateCategories>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateCategoriesSubscription
  extends Promise<AsyncIterator<AggregateCategories>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Inventory {
  quan_in_stock: Int;
  sales: Int;
}

export interface InventoryPromise extends Promise<Inventory>, Fragmentable {
  prod_id: <T = FragmentableArray<Products>>(
    args?: {
      where?: ProductsWhereInput;
      orderBy?: ProductsOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  quan_in_stock: () => Promise<Int>;
  sales: () => Promise<Int>;
}

export interface InventorySubscription
  extends Promise<AsyncIterator<Inventory>>,
    Fragmentable {
  prod_id: <T = Promise<AsyncIterator<ProductsSubscription>>>(
    args?: {
      where?: ProductsWhereInput;
      orderBy?: ProductsOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  quan_in_stock: () => Promise<AsyncIterator<Int>>;
  sales: () => Promise<AsyncIterator<Int>>;
}

export interface Products {
  prod_id: ID_Output;
  title: String;
  actor: String;
  price: Int;
  special: Int;
  common_prod_id?: Int;
}

export interface ProductsPromise extends Promise<Products>, Fragmentable {
  prod_id: () => Promise<ID_Output>;
  category: <T = FragmentableArray<Categories>>(
    args?: {
      where?: CategoriesWhereInput;
      orderBy?: CategoriesOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  title: () => Promise<String>;
  actor: () => Promise<String>;
  price: () => Promise<Int>;
  special: () => Promise<Int>;
  common_prod_id: () => Promise<Int>;
}

export interface ProductsSubscription
  extends Promise<AsyncIterator<Products>>,
    Fragmentable {
  prod_id: () => Promise<AsyncIterator<ID_Output>>;
  category: <T = Promise<AsyncIterator<CategoriesSubscription>>>(
    args?: {
      where?: CategoriesWhereInput;
      orderBy?: CategoriesOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  title: () => Promise<AsyncIterator<String>>;
  actor: () => Promise<AsyncIterator<String>>;
  price: () => Promise<AsyncIterator<Int>>;
  special: () => Promise<AsyncIterator<Int>>;
  common_prod_id: () => Promise<AsyncIterator<Int>>;
}

export interface InventoryConnection {
  pageInfo: PageInfo;
  edges: InventoryEdge[];
}

export interface InventoryConnectionPromise
  extends Promise<InventoryConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<InventoryEdge>>() => T;
  aggregate: <T = AggregateInventoryPromise>() => T;
}

export interface InventoryConnectionSubscription
  extends Promise<AsyncIterator<InventoryConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<InventoryEdgeSubscription>>>() => T;
  aggregate: <T = AggregateInventorySubscription>() => T;
}

export interface InventoryEdge {
  node: Inventory;
  cursor: String;
}

export interface InventoryEdgePromise
  extends Promise<InventoryEdge>,
    Fragmentable {
  node: <T = InventoryPromise>() => T;
  cursor: () => Promise<String>;
}

export interface InventoryEdgeSubscription
  extends Promise<AsyncIterator<InventoryEdge>>,
    Fragmentable {
  node: <T = InventorySubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateInventory {
  count: Int;
}

export interface AggregateInventoryPromise
  extends Promise<AggregateInventory>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateInventorySubscription
  extends Promise<AsyncIterator<AggregateInventory>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface ProductsConnection {
  pageInfo: PageInfo;
  edges: ProductsEdge[];
}

export interface ProductsConnectionPromise
  extends Promise<ProductsConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ProductsEdge>>() => T;
  aggregate: <T = AggregateProductsPromise>() => T;
}

export interface ProductsConnectionSubscription
  extends Promise<AsyncIterator<ProductsConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ProductsEdgeSubscription>>>() => T;
  aggregate: <T = AggregateProductsSubscription>() => T;
}

export interface ProductsEdge {
  node: Products;
  cursor: String;
}

export interface ProductsEdgePromise
  extends Promise<ProductsEdge>,
    Fragmentable {
  node: <T = ProductsPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ProductsEdgeSubscription
  extends Promise<AsyncIterator<ProductsEdge>>,
    Fragmentable {
  node: <T = ProductsSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateProducts {
  count: Int;
}

export interface AggregateProductsPromise
  extends Promise<AggregateProducts>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateProductsSubscription
  extends Promise<AsyncIterator<AggregateProducts>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Reorder {
  date_low: DateTimeOutput;
  quan_low: Int;
  date_reordered: DateTimeOutput;
  quan_reordered: Int;
  date_expected: DateTimeOutput;
}

export interface ReorderPromise extends Promise<Reorder>, Fragmentable {
  prod_id: <T = FragmentableArray<Products>>(
    args?: {
      where?: ProductsWhereInput;
      orderBy?: ProductsOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  date_low: () => Promise<DateTimeOutput>;
  quan_low: () => Promise<Int>;
  date_reordered: () => Promise<DateTimeOutput>;
  quan_reordered: () => Promise<Int>;
  date_expected: () => Promise<DateTimeOutput>;
}

export interface ReorderSubscription
  extends Promise<AsyncIterator<Reorder>>,
    Fragmentable {
  prod_id: <T = Promise<AsyncIterator<ProductsSubscription>>>(
    args?: {
      where?: ProductsWhereInput;
      orderBy?: ProductsOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  date_low: () => Promise<AsyncIterator<DateTimeOutput>>;
  quan_low: () => Promise<AsyncIterator<Int>>;
  date_reordered: () => Promise<AsyncIterator<DateTimeOutput>>;
  quan_reordered: () => Promise<AsyncIterator<Int>>;
  date_expected: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface ReorderConnection {
  pageInfo: PageInfo;
  edges: ReorderEdge[];
}

export interface ReorderConnectionPromise
  extends Promise<ReorderConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ReorderEdge>>() => T;
  aggregate: <T = AggregateReorderPromise>() => T;
}

export interface ReorderConnectionSubscription
  extends Promise<AsyncIterator<ReorderConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ReorderEdgeSubscription>>>() => T;
  aggregate: <T = AggregateReorderSubscription>() => T;
}

export interface ReorderEdge {
  node: Reorder;
  cursor: String;
}

export interface ReorderEdgePromise extends Promise<ReorderEdge>, Fragmentable {
  node: <T = ReorderPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ReorderEdgeSubscription
  extends Promise<AsyncIterator<ReorderEdge>>,
    Fragmentable {
  node: <T = ReorderSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateReorder {
  count: Int;
}

export interface AggregateReorderPromise
  extends Promise<AggregateReorder>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateReorderSubscription
  extends Promise<AsyncIterator<AggregateReorder>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface CategoriesSubscriptionPayload {
  mutation: MutationType;
  node: Categories;
  updatedFields: String[];
  previousValues: CategoriesPreviousValues;
}

export interface CategoriesSubscriptionPayloadPromise
  extends Promise<CategoriesSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = CategoriesPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = CategoriesPreviousValuesPromise>() => T;
}

export interface CategoriesSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<CategoriesSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = CategoriesSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = CategoriesPreviousValuesSubscription>() => T;
}

export interface CategoriesPreviousValues {
  category: ID_Output;
  categoryname: String;
}

export interface CategoriesPreviousValuesPromise
  extends Promise<CategoriesPreviousValues>,
    Fragmentable {
  category: () => Promise<ID_Output>;
  categoryname: () => Promise<String>;
}

export interface CategoriesPreviousValuesSubscription
  extends Promise<AsyncIterator<CategoriesPreviousValues>>,
    Fragmentable {
  category: () => Promise<AsyncIterator<ID_Output>>;
  categoryname: () => Promise<AsyncIterator<String>>;
}

export interface InventorySubscriptionPayload {
  mutation: MutationType;
  node: Inventory;
  updatedFields: String[];
  previousValues: InventoryPreviousValues;
}

export interface InventorySubscriptionPayloadPromise
  extends Promise<InventorySubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = InventoryPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = InventoryPreviousValuesPromise>() => T;
}

export interface InventorySubscriptionPayloadSubscription
  extends Promise<AsyncIterator<InventorySubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = InventorySubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = InventoryPreviousValuesSubscription>() => T;
}

export interface InventoryPreviousValues {
  quan_in_stock: Int;
  sales: Int;
}

export interface InventoryPreviousValuesPromise
  extends Promise<InventoryPreviousValues>,
    Fragmentable {
  quan_in_stock: () => Promise<Int>;
  sales: () => Promise<Int>;
}

export interface InventoryPreviousValuesSubscription
  extends Promise<AsyncIterator<InventoryPreviousValues>>,
    Fragmentable {
  quan_in_stock: () => Promise<AsyncIterator<Int>>;
  sales: () => Promise<AsyncIterator<Int>>;
}

export interface ProductsSubscriptionPayload {
  mutation: MutationType;
  node: Products;
  updatedFields: String[];
  previousValues: ProductsPreviousValues;
}

export interface ProductsSubscriptionPayloadPromise
  extends Promise<ProductsSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ProductsPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ProductsPreviousValuesPromise>() => T;
}

export interface ProductsSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ProductsSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ProductsSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ProductsPreviousValuesSubscription>() => T;
}

export interface ProductsPreviousValues {
  prod_id: ID_Output;
  title: String;
  actor: String;
  price: Int;
  special: Int;
  common_prod_id?: Int;
}

export interface ProductsPreviousValuesPromise
  extends Promise<ProductsPreviousValues>,
    Fragmentable {
  prod_id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  actor: () => Promise<String>;
  price: () => Promise<Int>;
  special: () => Promise<Int>;
  common_prod_id: () => Promise<Int>;
}

export interface ProductsPreviousValuesSubscription
  extends Promise<AsyncIterator<ProductsPreviousValues>>,
    Fragmentable {
  prod_id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  actor: () => Promise<AsyncIterator<String>>;
  price: () => Promise<AsyncIterator<Int>>;
  special: () => Promise<AsyncIterator<Int>>;
  common_prod_id: () => Promise<AsyncIterator<Int>>;
}

export interface ReorderSubscriptionPayload {
  mutation: MutationType;
  node: Reorder;
  updatedFields: String[];
  previousValues: ReorderPreviousValues;
}

export interface ReorderSubscriptionPayloadPromise
  extends Promise<ReorderSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ReorderPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ReorderPreviousValuesPromise>() => T;
}

export interface ReorderSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ReorderSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ReorderSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ReorderPreviousValuesSubscription>() => T;
}

export interface ReorderPreviousValues {
  date_low: DateTimeOutput;
  quan_low: Int;
  date_reordered: DateTimeOutput;
  quan_reordered: Int;
  date_expected: DateTimeOutput;
}

export interface ReorderPreviousValuesPromise
  extends Promise<ReorderPreviousValues>,
    Fragmentable {
  date_low: () => Promise<DateTimeOutput>;
  quan_low: () => Promise<Int>;
  date_reordered: () => Promise<DateTimeOutput>;
  quan_reordered: () => Promise<Int>;
  date_expected: () => Promise<DateTimeOutput>;
}

export interface ReorderPreviousValuesSubscription
  extends Promise<AsyncIterator<ReorderPreviousValues>>,
    Fragmentable {
  date_low: () => Promise<AsyncIterator<DateTimeOutput>>;
  quan_low: () => Promise<AsyncIterator<Int>>;
  date_reordered: () => Promise<AsyncIterator<DateTimeOutput>>;
  quan_reordered: () => Promise<AsyncIterator<Int>>;
  date_expected: () => Promise<AsyncIterator<DateTimeOutput>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Products",
    embedded: false
  },
  {
    name: "Reorder",
    embedded: false
  },
  {
    name: "Inventory",
    embedded: false
  },
  {
    name: "Categories",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;