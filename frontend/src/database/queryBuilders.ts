// example of a create query
// await write(
//   `CREATE (u:User)
//    SET u.alias = $alias
//    SET u.encPublicKey = $encPublicKey
//    SET u.verifyKey = $verifyKey`,
//   { ...identity.public }
// );
// MERGE (p1:Person { name: $person1Name }

/**
 *
 * @param {string} schema name of the DB Schema for this node
 * @param   attributes a list of the property names and corresponding values to set onto this node
 * @returns {string} the generated query to CREATE a new node
 */
export const createNode = (
  schema: string,
  attributes: Record<string, any>[]
) => {
  const key = schema[0].toLowerCase();

  let query = `CREATE (${key}:${schema})`;
  for (const attribute of attributes) {
    const property = Object.keys(attribute)[0];
    const value = attribute[property];
    query += ` SET ${key}.${property} = '${value}'`;
  }
  return query;
};

export const getNodes = (schema: string) => {
  const key = schema[0].toLowerCase();

  const query = `MATCH (${key}:${schema}) RETURN *`;

  return query;
};
