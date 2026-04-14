import { NextResponse } from 'next/server';
import pages from '@/json/pagesRedirect.json';

export default function middleware(req) {
  const pathname = req.nextUrl.pathname.replace(/^\/|\/$/g, ''); // Remove leading/trailing slashes

  const pageRedirects = pages.map(({ oldSlug, newSlug }) => ({
    oldSlug: oldSlug.replace(/^\/|\/$/g, ''), // Normalize slugs
    newSlug,
  }));

  const matchedRedirect = pageRedirects.find(
    (entry) => entry.oldSlug === pathname
  );

  if (matchedRedirect) {
    const isFullUrl = matchedRedirect.newSlug.startsWith('http');
    const newPageUrl = isFullUrl
      ? matchedRedirect.newSlug
      : new URL(`/${matchedRedirect.newSlug.replace(/^\/+/, '')}`, req.url);

    return NextResponse.redirect(
      newPageUrl,
      307
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
