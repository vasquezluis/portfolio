import { createPool } from "mysql2/promise";

import {
  DB_HOST,
  DB_PORT,
  DB_PASSWORD,
  DB_USER,
  DB_DATABASE,
} from "../config.js";

export const pool = createPool({
  host: DB_HOST,
  port: DB_PORT,
  password: DB_PASSWORD,
  user: DB_USER,
  database: DB_DATABASE,
});
