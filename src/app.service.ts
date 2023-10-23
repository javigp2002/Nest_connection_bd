import { Inject, Injectable } from '@nestjs/common';
import { DbConnection } from './db/db.connection';

@Injectable()
export class AppService {
  constructor(private dbConnection: DbConnection) {}

  getHello(): string {
    return 'Hello World!';
  }
  async getUsers() {
    let conn;
    try {
      conn = await this.dbConnection.createConnection();
      const rows = await conn.query('SELECT * FROM users');
      // console.log(rows);
      return rows;
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.end();
    }
  }
}

// const service = new AppService(new MyDb());
