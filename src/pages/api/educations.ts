import { NextApiResponse } from 'next'
import { getUserIdFromToken } from '@/utils/auth'
import prisma from '@/lib/prisma'
import { EducationApiRequest } from '@/lib/types'

export default async function educations(
  req: EducationApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { degree, school, start, end, grade, description } = req.body
    const token = req.cookies.SHOWWCASE_ACCESS_TOKEN
    if (token) {
      const id = getUserIdFromToken(token)
      await prisma.education.create({
        data: {
          degree,
          school,
          startYear: new Date(start),
          endYear: new Date(end),
          grade,
          description,
          user: {
            connect: { id },
          },
        },
      })
      res.json({ education: { school } })
    }
  }
}
