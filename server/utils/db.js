import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "localhost",
  port: 3306,
  password: "30889567",
  user: "luisvasquez",
  database: "portfolio",
});
