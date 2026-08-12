import {
  createDashboardSession,
  dashboardCookieName,
  verifyDashboardCredentials,
} from "../dashboard-auth";

export const dynamic = "force-dynamic";

function sanitizeReturnTo(value: FormDataEntryValue | null) {
  const returnTo = typeof value === "string" ? value : "/dashboard";
  if (!returnTo.startsWith("/") || returnTo.startsWith("//")) return "/dashboard";
  return returnTo;
}

function redirect(request: Request, path: string, cookie?: string) {
  const location = new URL(path, request.url);
  const headers = new Headers({ location: location.toString() });
  if (cookie) headers.set("set-cookie", cookie);
  return new Response(null, { status: 303, headers });
}

export async function POST(request: Request) {
  const form = await request.formData();
  const username = String(form.get("username") || "");
  const password = String(form.get("password") || "");
  const returnTo = sanitizeReturnTo(form.get("returnTo"));

  if (!verifyDashboardCredentials(username, password)) {
    return redirect(request, `/dashboard?auth=invalid&returnTo=${encodeURIComponent(returnTo)}`);
  }

  const session = await createDashboardSession(username);
  const secure = new URL(request.url).protocol === "https:" ? "; Secure" : "";
  const cookie = [
    `${dashboardCookieName}=${session.value}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    `Max-Age=${session.maxAge}`,
    secure,
  ]
    .filter(Boolean)
    .join("; ");

  return redirect(request, returnTo, cookie);
}
