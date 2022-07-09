import { NextApiResponse } from 'next'
import { getUserIdFromToken } from '@/utils/auth'
import prisma from '@/lib/prisma'
import { UserApiRequest } from '@/lib/types'

export default async function users(req: UserApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name } = req.body
    const token = req.cookies.SHOWWCASE_ACCESS_TOKEN
    if (token) {
      const id = getUserIdFromToken(token)
      const user = await prisma.user.update({
        where: { id },
        data: { name },
      })

      res.json({ user: { email: user?.email, name: user?.name } })
    }
  }
}
