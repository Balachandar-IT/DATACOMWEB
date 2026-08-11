import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import mysql from "mysql2/promise";
import { readMysqlConfig } from "./mysql.mjs";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const schemaPath = resolve(rootDir, "backend", "schema.sql");

function splitStatements(sql) {
  return sql
    .split(/;\s*$/m)
    .map((statement) => statement.trim())
    .filter(Boolean);
}

async function main() {
  const configWithDb = readMysqlConfig();
  const database = configWithDb.database;
  const bootstrapConfig = readMysqlConfig({ includeDatabase: false });

  const bootstrap = await mysql.createConnection(bootstrapConfig);
  try {
    await bootstrap.query(
      `CREATE DATABASE IF NOT EXISTS \`${database}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`,
    );
  } finally {
    await bootstrap.end();
  }

  const connection = await mysql.createConnection(configWithDb);
  try {
    const schemaSql = await readFile(schemaPath, "utf8");
    for (const statement of splitStatements(schemaSql)) {
      await connection.query(statement);
    }

    const [tables] = await connection.query("SHOW TABLES");
    console.log(`MySQL database "${database}" is ready.`);
    console.log(`Tables: ${tables.length}`);
  } finally {
    await connection.end();
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
