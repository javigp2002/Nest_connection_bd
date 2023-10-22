import { Inject, Injectable } from '@nestjs/common';
import { MDB_CONNECTION } from './constants';
import * as db from 'mariadb'
import { DbConnection } from './db/db.connection';

@Injectable()
export class AppService {
  constructor(private dbConnection: DbConnection){}

  async getUsers(){
    let conn;
    try {
      conn = await this.dbConnection.createConnection();
      
      const rows = await conn.query("SELECT * FROM users");
      console.log(rows); //[ {val: 1}, meta: ... ]
      return rows;
    } catch (err) {
      throw err;
    } finally {
      if (conn) return conn.end();
    }

  }
}



// const service = new AppService(new MyDb());