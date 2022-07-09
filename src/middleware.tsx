import { NextRequest, NextResponse } from 'next/server'

const protectedRoutes = ['/']
const publicRoutes = ['/login', '/register']

export default function middleware(req: NextRequest) {
  const token = req.cookies.get('SHOWWCASE_ACCESS_TOKEN')
  if (protectedRoutes.find((p) => p === req.nextUrl.pathname)) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url))
    }
  }

  if (publicRoutes.find((p) => p === req.nextUrl.pathname)) {
    if (token) {
      return NextResponse.redirect(new URL('/', req.url))
    }
  }
}
