import { findOne } from "./methods/findOne.js";
import { insertOne } from "./methods/insertOne.js";
import { updateOne } from "./methods/updateOne.js";
import { deleteOne } from "./methods/deleteOne.js";
import { find } from "./methods/find.js";
import { insertMany } from "./methods/insertMany.js";
import { updateMany } from "./methods/updateMany.js";
import { deleteMany } from "./methods/deleteMany.js";
import { aggregate } from "./methods/aggregate.js";
import { count } from "./methods/count.js";
import { countDocuments } from "./methods/countDocuments.js";
import { populate } from "./methods/populate.js";

const operations = {
  findOne,
  insertOne,
  updateOne,
  deleteOne,
  find,
  insertMany,
  updateMany,
  deleteMany,
  aggregate,
  count,
  countDocuments,
  populate,
};

export default operations;
