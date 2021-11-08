import { Knex } from 'knex';

const tableName = 'posts';
const newColumnName = 'signature';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable(tableName, tbl => {
    tbl.text(newColumnName);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable(tableName, tbl => {
    tbl.dropColumn(newColumnName);
  });
}
