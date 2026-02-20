import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const response = NextResponse.next();

    // Basic security headers at middleware level if needed
    // although vercel.json handles them globally, having them here
    // allows for more dynamic adjustments.

    // Example: Rate limiting logic could be added here using Upstash or similar.

    return response;
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
