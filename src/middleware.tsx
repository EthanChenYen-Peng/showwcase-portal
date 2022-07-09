import { NextRequest, NextResponse } from 'next/server'

const protectedRoutes = ['/dashboard']

export default function middleware(req: NextRequest) {
  if (protectedRoutes.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.get('SHOWWCASE_ACCESS_TOKEN')

    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url))
    }
  }
}
