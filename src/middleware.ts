import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const userCookie = req.cookies.get("auth_user");

  if (!userCookie) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  const user = JSON.parse(userCookie.value);

  if (user.id <= 5 && req.nextUrl.pathname === "/setting") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/setting"],
};
