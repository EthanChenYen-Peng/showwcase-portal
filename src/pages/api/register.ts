import bcrypt from 'bcrypt'
import { NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { AuthApiRequest } from '@/lib/types'
import { createToken, signInUser } from '@/utils/auth'

const register = async (req: AuthApiRequest, res: NextApiResponse) => {
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

  const token = createToken({ id: user.id, email: user.email })

  signInUser(res, token)
  res.json({ email: user.email })
}

export default register
