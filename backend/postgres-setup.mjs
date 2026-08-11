import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createPostgresClient, readPostgresConfig } from "./postgres.mjs";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const schemaPath = resolve(rootDir, "backend", "postgres-schema.sql");

function getDatabaseName() {
  const url = process.env.POSTGRES_URL || process.env.DATABASE_URL;
  if (url) return new URL(url).pathname.replace(/^\//, "");
  return process.env.POSTGRES_DATABASE;
}

async function main() {
  readPostgresConfig();
  const database = getDatabaseName();
  if (!database) throw new Error("POSTGRES_DATABASE is required.");

  const bootstrap = createPostgresClient({ includeDatabase: false });
  await bootstrap.connect();
  try {
    const exists = await bootstrap.query("SELECT 1 FROM pg_database WHERE datname = $1", [database]);
    if (exists.rowCount === 0) {
      await bootstrap.query(`CREATE DATABASE "${database.replace(/"/g, '""')}"`);
    }
  } finally {
    await bootstrap.end();
  }

  const client = createPostgresClient();
  await client.connect();
  try {
    const schemaSql = await readFile(schemaPath, "utf8");
    await client.query(schemaSql);
    const tables = await client.query(
      "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY table_name",
    );
    console.log(`PostgreSQL database "${database}" is ready.`);
    console.log(`Tables: ${tables.rowCount}`);
  } finally {
    await client.end();
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
