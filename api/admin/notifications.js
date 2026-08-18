import { requireAdmin } from "../_admin-auth.js";
import { handleError, handleOptions, readJson, sendJson } from "../_helpers.js";
import {
  getEmailNotificationStatus,
  saveOwnerNotificationRecipients,
  sendOwnerNotification,
  testNotification,
} from "../_email.js";

export default async function handler(req, res) {
  if (handleOptions(req, res)) return;
  if (!requireAdmin(req, res)) return;

  try {
    if (req.method === "GET") {
      return sendJson(res, 200, await getEmailNotificationStatus());
    }

    if (req.method === "PUT") {
      const payload = await readJson(req);
      try {
        await saveOwnerNotificationRecipients(payload.recipients || payload.emailRecipients || "");
      } catch (error) {
        if (error instanceof Error && error.message.startsWith("Invalid email address:")) {
          return sendJson(res, 400, {
            ...(await getEmailNotificationStatus()),
            error: error.message,
          });
        }
        throw error;
      }
      return sendJson(res, 200, await getEmailNotificationStatus());
    }

    if (req.method === "POST") {
      const status = await getEmailNotificationStatus();
      if (!status.connected) {
        return sendJson(res, 400, {
          ...status,
          error: "Email provider is not connected",
        });
      }

      const result = await sendOwnerNotification(testNotification());
      return sendJson(res, result.sent ? 200 : 502, {
        ...(await getEmailNotificationStatus()),
        test: result,
      });
    }

    return sendJson(res, 405, { error: "Method not allowed" });
  } catch (error) {
    return handleError(res, error);
  }
}
