import { type NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export const i18nMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  const response = await i18nMiddleware(request);
  const pathname = request.nextUrl.pathname;

  if (pathname.includes("/admin")) {
    return await updateSession(request, response);
  }

  return response;
}

export const config = {
  // all except
  matcher: ["/", "/(hu|en)/:path*", "/admin/:path*", "/login"],
};
