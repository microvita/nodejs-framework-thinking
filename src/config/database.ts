import { Pool } from "pg";
import environment from "./env";

export const pool = new Pool({
  connectionString: environment.dataStore.path,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export const testConnection = async () => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT NOW()");
    client.release();
    return { success: true, time: result.rows[0].now };
  } catch (error) {
    return { success: false, error };
  }
};

export default pool;
