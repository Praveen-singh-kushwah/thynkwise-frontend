import { NextResponse } from 'next/server';
import pages from '@/json/pagesRedirect.json';

export default function middleware(req) {
  const pathname = req.nextUrl.pathname.replace(/^\/|\/$/g, ''); // Remove leading/trailing slashes
  const cityPrefix = 'apollo-sales-execution-services-in-';
  const oldCityPrefix = 'apollo-sales-execution-services-in/';
  const isCityRewrite = req.headers.get('x-city-rewrite') === '1';

  if (!isCityRewrite && pathname.startsWith(oldCityPrefix)) {
    const citySlug = pathname.slice(oldCityPrefix.length);

    if (citySlug && !citySlug.includes('/') && !citySlug.startsWith(cityPrefix)) {
      return NextResponse.redirect(
        new URL(`/${cityPrefix}${citySlug}`, req.url),
        301
      );
    }
  }

  const pageRedirects = pages.map(({ oldSlug, newSlug }) => ({
    oldSlug: oldSlug.replace(/^\/|\/$/g, ''), // Normalize slugs
    newSlug,
  }));

  const matchedRedirect = isCityRewrite
    ? null
    : pageRedirects.find((entry) => entry.oldSlug === pathname);

  if (matchedRedirect) {
    const isFullUrl = matchedRedirect.newSlug.startsWith('http');
    const newPageUrl = isFullUrl
      ? matchedRedirect.newSlug
      : new URL(`/${matchedRedirect.newSlug.replace(/^\/+/, '')}`, req.url);

    return NextResponse.redirect(
      newPageUrl,
      301
    );
  }

  if (pathname.startsWith(cityPrefix) && !pathname.includes('/')) {
    const cityPageUrl = req.nextUrl.clone();
    const requestHeaders = new Headers(req.headers);

    cityPageUrl.pathname = `/apollo-sales-execution-services-in/${pathname}`;
    requestHeaders.set('x-city-rewrite', '1');

    return NextResponse.rewrite(cityPageUrl, {
      request: {
        headers: requestHeaders,
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
