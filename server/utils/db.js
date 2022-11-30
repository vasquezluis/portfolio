import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "192.168.0.105",
  port: 3306,
  password: "30889567",
  user: "luisvasquez",
  database: "luis_portfolio",
});
