import pg from "pg";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const { Pool, Client } = pg;

function loadEnvFile() {
  const envPath = resolve(process.cwd(), ".env");
  if (!existsSync(envPath)) return;

  const lines = readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const separator = trimmed.indexOf("=");
    if (separator === -1) continue;
    const key = trimmed.slice(0, separator).trim();
    const value = trimmed.slice(separator + 1).trim().replace(/^["']|["']$/g, "");
    if (key && process.env[key] === undefined) process.env[key] = value;
  }
}

loadEnvFile();

export function readPostgresConfig({ includeDatabase = true } = {}) {
  const url = process.env.POSTGRES_URL || process.env.DATABASE_URL;
  if (url) {
    if (includeDatabase) return { connectionString: url, ssl: process.env.POSTGRES_SSL === "true" ? { rejectUnauthorized: false } : undefined };

    const parsed = new URL(url);
    parsed.pathname = "/postgres";
    return {
      connectionString: parsed.toString(),
      ssl: process.env.POSTGRES_SSL === "true" ? { rejectUnauthorized: false } : undefined,
    };
  }

  const host = process.env.POSTGRES_HOST;
  const user = process.env.POSTGRES_USER;
  const database = process.env.POSTGRES_DATABASE;
  if (!host || !user || (includeDatabase && !database)) {
    throw new Error(
      "PostgreSQL is not configured. Set POSTGRES_HOST, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DATABASE in .env, or set POSTGRES_URL.",
    );
  }

  return {
    host,
    port: Number(process.env.POSTGRES_PORT || 5432),
    user,
    password: process.env.POSTGRES_PASSWORD || "",
    database: includeDatabase ? database : "postgres",
    ssl: process.env.POSTGRES_SSL === "true" ? { rejectUnauthorized: false } : undefined,
  };
}

export function createPostgresPool() {
  return new Pool(readPostgresConfig());
}

export function createPostgresClient(options) {
  return new Client(readPostgresConfig(options));
}

export async function withPostgres(callback) {
  const pool = createPostgresPool();
  try {
    return await callback(pool);
  } finally {
    await pool.end();
  }
}
