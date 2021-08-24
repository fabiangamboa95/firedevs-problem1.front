import {
  CreateParams,
  CreateResult,
  DeleteManyParams,
  DeleteManyResult,
  DeleteParams,
  DeleteResult,
  GetListParams,
  GetListResult,
  GetManyParams,
  GetManyReferenceParams,
  GetManyReferenceResult,
  GetManyResult,
  GetOneParams,
  GetOneResult,
  UpdateManyParams,
  UpdateManyResult,
  UpdateParams,
  UpdateResult,
} from "react-admin";
import diff from "object-diff";
import feathersClient from "./feathers.client";

interface Query {
  id?: any;
  $limit?: number;
  $skip?: number;
  $sort?: object;
}

const queryOperators = [
  "$gt",
  "$gte",
  "$lt",
  "$lte",
  "$ne",
  "$sort",
  "$or",
  "$nin",
  "$in",
];

const idKey = "id";
const usePatch = false;

const flatten = (object: any, prefix = "", stopKeys: string[] = []): object => {
  return Object.keys(object).reduce((prev, element) => {
    const hasNextLevel =
      object[element] &&
      typeof object[element] === "object" &&
      !Array.isArray(object[element]) &&
      !Object.keys(object[element]).some((key) => stopKeys.includes(key));

    return hasNextLevel
      ? {
          ...prev,
          ...flatten(object[element], `${prefix}${element}.`, stopKeys),
        }
      : { ...prev, ...{ [`${prefix}${element}`]: object[element] } };
  }, {});
};

const deleteProp = (object: any, prop: string) =>
  Object.keys(object).reduce((newObj: any, key: string) => {
    if (key !== prop) newObj[key] = object[key];
    return newObj;
  }, {});

// cool and typed adapter
const dataProvider = {
  getList: async <RecordType>(
    resource: string,
    params: GetListParams
  ): Promise<GetListResult<RecordType>> => {
    const { page, perPage } = params.pagination || {};
    const { field, order } = params.sort || {};
    const { filter } = params;

    const query: Query = {};
    // pagination
    if (page && perPage) {
      query.$limit = perPage;
      query.$skip = perPage * (page - 1);
    }
    // order
    if (order) {
      query.$sort = { [field]: order === "DESC" ? -1 : 1 };
    }
    // filter
    Object.assign(query, filter ? flatten(filter, "", queryOperators) : {});

    return feathersClient.service(resource).find({ query });
  },

  getMany: async <RecordType>(
    resource: string,
    params: GetManyParams
  ): Promise<GetManyResult<RecordType>> => {
    const ids = params.ids || [];

    const query: Query = {};
    query[idKey] = { $in: ids };
    query.$limit = ids.length;

    return feathersClient.service(resource).find({ query });
  },

  getManyReference: async <RecordType>(
    resource: string,
    params: GetManyReferenceParams
  ): Promise<GetManyReferenceResult<RecordType>> => {
    console.log(resource, params); // ! dev
    return { data: [] as RecordType[], total: 0 };
  },

  getOne: async <RecordType>(
    resource: string,
    params: GetOneParams
  ): Promise<GetOneResult<RecordType>> => {
    const restParams = deleteProp(params, idKey);
    const response = await feathersClient
      .service(resource)
      .get(params.id, restParams);
    return { data: { ...response } };
  },

  create: async <RecordType>(
    resource: string,
    params: CreateParams
  ): Promise<CreateResult<RecordType>> => {
    return { data: await feathersClient.service(resource).create(params.data) };
  },

  update: async <RecordType>(
    resource: string,
    params: UpdateParams
  ): Promise<UpdateResult<RecordType>> => {
    let response;
    if (usePatch) {
      const data = params.previousData
        ? diff(params.previousData, params.data)
        : params.data;
      response = await feathersClient.service(resource).patch(params.id, data);
    } else
      response = await feathersClient
        .service(resource)
        .update(params.id, params.data);
    return { data: { ...response } };
  },

  updateMany: async (
    resource: string,
    params: UpdateManyParams
  ): Promise<UpdateManyResult> => {
    return Promise.all(
      params.ids.map(
        (id) => () => feathersClient.service(resource).update(id, params.data)
      )
    ) as Promise<UpdateManyResult>;
  },

  delete: async <RecordType>(
    resource: string,
    params: DeleteParams
  ): Promise<DeleteResult<RecordType>> => {
    const response = await feathersClient.service(resource).remove(params.id);
    return { data: { ...response } };
  },

  deleteMany: async (
    resource: string,
    params: DeleteManyParams
  ): Promise<DeleteManyResult> => {
    const response = await Promise.all(
      params.ids.map((id) => feathersClient.service(resource).remove(id))
    );
    return { data: response.map((record) => record[idKey]) };
  },
};

export default dataProvider;
