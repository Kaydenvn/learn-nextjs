import { NextResponse } from "next/server";

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://example.com"]
    : ["http://localhost:3000", "https://google.com"];

export function middleware(request: Request) {
  console.log("Middleware");

  console.log("Method", request.method);

  console.log("URL", request.url);

  const origin = request.headers.get("origin");
  if (origin) console.log("Origin", origin);

  return NextResponse.next();
}

export const config = {
  matcher: "/about/:path*",
};
