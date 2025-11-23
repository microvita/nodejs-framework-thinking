import { pool } from "../../config/database";

export abstract class BaseModel<T> {
  protected tableName: string;
  protected primaryKey: string = "id";

  constructor(tableName: string) {
    this.tableName = tableName;
  }

  async getAll(): Promise<T[]> {
    const query = `SELECT * FROM ${this.tableName}`;
    const result = await pool.query(query);
    return result.rows;
  }
}
