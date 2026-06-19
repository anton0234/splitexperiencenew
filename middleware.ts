import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';

  // Strip port for local dev (e.g. localhost:3000)
  const host = hostname.split(':')[0];

  // The root domain — adjust if needed
  const rootDomain = 'splitexperience.com';

  // Extract subdomain (e.g. "apartmentspalatum" from "apartmentspalatum.splitexperience.com")
  // Also works on Vercel preview URLs — ignore those
  const isSubdomain =
    host.endsWith(`.${rootDomain}`) && !host.startsWith('www.');

  if (isSubdomain) {
    const slug = host.replace(`.${rootDomain}`, '');
    const url = request.nextUrl.clone();
    // Rewrite internally to /[host] without changing the browser URL
    url.pathname = `/${slug}${url.pathname === '/' ? '' : url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  // Run on all paths except Next.js internals and static files
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images/).*)'],
};
