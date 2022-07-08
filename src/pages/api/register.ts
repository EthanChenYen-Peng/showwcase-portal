import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

const jwtSecret = process.env.JWT_SECRET || 'asdfqwerasdf'

interface CustomRequest extends NextApiRequest {
  body: {
    email: string
    password: string
  }
}
const register = async (req: CustomRequest, res: NextApiResponse) => {
  const salt = bcrypt.genSaltSync()
  const { email, password } = req.body

  let user

  try {
    user = await prisma.user.create({
      data: {
        email,
        password: bcrypt.hashSync(password, salt),
      },
    })
  } catch (e) {
    res.status(401)
    res.json({ error: 'Email has already been taken' })
    return
  }

  const token = jwt.sign(
    {
      email: user.email,
      id: user.id,
      time: Date.now(),
    },
    jwtSecret,
    { expiresIn: '8h' }
  )

  res.setHeader(
    'Set-Cookie',
    cookie.serialize('SHOWWCASE_ACCESS_TOKEN', token, {
      httpOnly: true,
      maxAge: 8 * 60 * 60,
      path: '/',
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    })
  )

  res.json({ email: user.email })
}

export default register
