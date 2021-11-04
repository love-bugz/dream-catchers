import neo4j from "neo4j-driver";
import secrets from "../secrets.json";

const uri = secrets.neo_connection_url;
const user = secrets.neo_username;
const password = secrets.neo_password;

export const queryDatabase = async (queryString: string) => {
  const driver = neo4j.driver(uri, neo4j.auth.basic(user, password), {
    encrypted: "ENCRYPTION_ON",
  });
  const session = driver.session();

  try {
    const tx = session.beginTransaction();
    const result = await tx.run(queryString);

    await tx.commit();

    // log the result in development mode
    if (process.env.NODE_ENV !== "production") console.log(result);

    return result;
  } catch (error) {
    console.error("something went wrong writing the query", queryString, error);
  } finally {
    await session.close();
  }

  await driver.close();
};

//
// this is the 4.0 syntax that we are using
//
// try {
//     const tx = session.beginTransaction()
//     const result = await tx.run('CREATE (a:Greeting) SET a.message = $message RETURN a.message + ", from node " + id(a)', { message: 'hello, world' })
//     const greeting = result.records[0].get(0)
//     console.log(greeting)
//     await tx.commit()
//   } finally {
//     await session.close()
//   }

//
// this uses the 1.7 syntax. it was in the official docs but I think it's outdated
//
//   try {
// To learn more about the Cypher syntax, see https://neo4j.com/docs/cypher-manual/current/
// The Reference Card is also a good resource for keywords https://neo4j.com/docs/cypher-refcard/current/
// const writeQuery = `MERGE (p1:Person { name: $person1Name })
//                           MERGE (p2:Person { name: $person2Name })
//                           MERGE (p1)-[:KNOWS]->(p2)
//                           RETURN p1, p2`;

// Write transactions allow the driver to handle retries and transient errors
// const writeResult = await session.writeTransaction((tx) => {
//   tx.run(writeQuery, { person1Name, person2Name })
// });
// writeResult.records.forEach((record) => {
//   const person1Node = record.get("p1");
//   const person2Node = record.get("p2");
//   console.log(
//     `Created friendship between: ${person1Node.properties.name}, ${person2Node.properties.name}`
//   );
// });

// const readQuery = `MATCH (p:Person)
//                          WHERE p.name = $personName
//                          RETURN p.name AS name`;
// const readResult = await session.readTransaction((tx) =>
//   tx.run(readQuery, { personName: person1Name })
// );
// readResult.records.forEach((record) => {
//   console.log(`Found person: ${record.get("name")}`);
// });
//   } catch (error) {
//     console.error("Something went wrong: ", error);
//   } finally {
//     await session.close();
//   }

// Don't forget to close the driver connection when you're finished with it
//   await driver.close();
