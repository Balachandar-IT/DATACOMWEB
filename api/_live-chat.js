export async function ensureLiveChatTables(db) {
  await db.query(`
    CREATE TABLE IF NOT EXISTS visitor_messages (
      id BIGSERIAL PRIMARY KEY,
      session_id VARCHAR(120) NOT NULL,
      author VARCHAR(20) NOT NULL CHECK (author IN ('owner', 'visitor')),
      body TEXT NOT NULL,
      page_path VARCHAR(500),
      read_by_owner_at TIMESTAMPTZ,
      read_by_visitor_at TIMESTAMPTZ,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);
  await db.query("CREATE INDEX IF NOT EXISTS visitor_messages_session_id_index ON visitor_messages (session_id)");
  await db.query("CREATE INDEX IF NOT EXISTS visitor_messages_created_at_index ON visitor_messages (created_at)");
  await db.query("CREATE INDEX IF NOT EXISTS visitor_messages_author_index ON visitor_messages (author)");
}

export function cleanSessionId(value) {
  return String(value || "").trim().slice(0, 120);
}

export function cleanChatBody(value) {
  return String(value || "").trim().slice(0, 2000);
}

export function mapVisitorMessage(row) {
  return {
    id: Number(row.id),
    sessionId: row.session_id,
    author: row.author,
    body: row.body,
    pagePath: row.page_path,
    createdAt: row.created_at,
  };
}
