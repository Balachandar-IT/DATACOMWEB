import { dashboardCookieName } from "../dashboard-auth";

export const dynamic = "force-dynamic";

export function POST(request: Request) {
  const secure = new URL(request.url).protocol === "https:" ? "; Secure" : "";
  return new Response(null, {
    status: 303,
    headers: {
      location: new URL("/owner-login", request.url).toString(),
      "set-cookie": `${dashboardCookieName}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0${secure}`,
    },
  });
}
