import { drizzle, type PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

let client: PostgresJsDatabase<typeof schema> | null = null;

/**
 * Ленивое подключение: клиент создаётся только при первом обращении
 * (внутри route handler / server action), чтобы статическая генерация
 * страниц не требовала доступной БД.
 */
export function getDb(): PostgresJsDatabase<typeof schema> {
  if (!client) {
    const url = process.env.DATABASE_URL;
    if (!url) {
      throw new Error("DATABASE_URL is not set");
    }
    client = drizzle(postgres(url, { max: 5 }), { schema });
  }
  return client;
}
