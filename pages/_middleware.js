import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

const stripDefaultLocale = (str) => {
	return str.replace("/_default", "");
};

export function middleware(request) {
	const { pathname, origin, locale, search } = request.nextUrl.clone();

	const shouldHandleLocale =
		!PUBLIC_FILE.test(pathname) &&
		!pathname.includes("/api/") &&
		locale === "_default";

	const redirectURL = `${origin}/ru${stripDefaultLocale(pathname)}${search}`;

	return shouldHandleLocale ? NextResponse.redirect(redirectURL) : undefined;
}
