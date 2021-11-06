import db from '../db/dbConfig';

class Controller {
  db = db;
  table: string;

  constructor(table: string) {
    this.table = table; // table name for db table
  }

  findAll() {
    return this.db(this.table);
  }

  findOne(queryObj: Record<string, unknown>) {
    return this.db(this.table).where(queryObj).first();
  }

  findBy(queryObj: Record<string, unknown>) {
    return this.db(this.table).where(queryObj);
  }

  remove(id: number) {
    return this.db(this.table).where({ id }).del();
  }
}

export default Controller;
