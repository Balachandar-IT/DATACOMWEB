import { requireAdmin } from "../_admin-auth.js";
import { handleError, handleOptions, sendJson } from "../_helpers.js";
import { getEmailNotificationStatus, sendOwnerNotification, testNotification } from "../_email.js";

export default async function handler(req, res) {
  if (handleOptions(req, res)) return;
  if (!requireAdmin(req, res)) return;

  try {
    if (req.method === "GET") {
      return sendJson(res, 200, getEmailNotificationStatus());
    }

    if (req.method === "POST") {
      const status = getEmailNotificationStatus();
      if (!status.connected) {
        return sendJson(res, 400, {
          ...status,
          error: "Email provider is not connected",
        });
      }

      const result = await sendOwnerNotification(testNotification());
      return sendJson(res, result.sent ? 200 : 502, {
        ...getEmailNotificationStatus(),
        test: result,
      });
    }

    return sendJson(res, 405, { error: "Method not allowed" });
  } catch (error) {
    return handleError(res, error);
  }
}
