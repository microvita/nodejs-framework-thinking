import { BaseModel } from "core/db/BaseModel";

export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  created_at?: Date;
  updated_at?: Date;
}

export class UserModel extends BaseModel<User> {
  constructor() {
    super("users");
  }

  // async findByEmail(email: string): Promise<User | null>{
  //     const query = 'SELECT * FROM users WHERE email = $1';
  //     const result = await pool.query(query, [email]);
  //     return result.rows[0] || null;
  // }
}
