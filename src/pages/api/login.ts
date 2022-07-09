import bcrypt from 'bcrypt'
import { NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { AuthApiRequest } from '@/lib/types'

import { createToken, signInUser } from '@/utils/auth'

const login = async (req: AuthApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = createToken({ id: user.id, email: user.email })

    signInUser(res, token)
    res.json({ email: user.email })
  } else {
    res.status(401)
    res.json({ error: 'Email or Password is wrong' })
  }
}

export default login
